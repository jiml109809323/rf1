import { copy, del, list, put } from "@vercel/blob";

const IMAGE_PREFIX_PENDING = "pending/photos/";
const IMAGE_PREFIX_APPROVED = "approved/photos/";
const META_PREFIX_PENDING = "pending/meta/";
const META_PREFIX_APPROVED = "approved/meta/";

export function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
    ...init,
  });
}

export function isAuthorized(request) {
  const expected = process.env.GALLERY_ADMIN_PASSWORD;
  const supplied = request.headers.get("x-gallery-admin-password") || "";
  return Boolean(expected) && supplied === expected;
}

export function requireAdmin(request) {
  if (!isAuthorized(request)) {
    throw new Response(
      JSON.stringify({ error: "Unauthorized. Check your admin password." }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}

export function safeText(value, fallback = "") {
  return String(value || fallback).trim().slice(0, 160);
}

function slugify(value, fallback = "stall-photo") {
  const slug = String(value || fallback)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50);

  return slug || fallback;
}

function extensionFromFile(file) {
  const byName = file.name?.split(".").pop()?.toLowerCase();
  if (byName && /^[a-z0-9]+$/.test(byName)) {
    return byName;
  }

  const byType = file.type?.split("/").pop()?.toLowerCase();
  if (byType && /^[a-z0-9.+-]+$/.test(byType)) {
    return byType.replace("jpeg", "jpg");
  }

  return "jpg";
}

function buildId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function listAll(prefix) {
  let cursor;
  let hasMore = true;
  const blobs = [];

  while (hasMore) {
    const result = await list({
      prefix,
      cursor,
      limit: 1000,
    });

    blobs.push(...result.blobs);
    cursor = result.cursor;
    hasMore = result.hasMore;
  }

  return blobs;
}

function extractId(pathname) {
  const fileName = pathname.split("/").pop() || "";
  return fileName.split("__")[0].replace(/\.json$/, "");
}

async function fetchMetadata(url) {
  const response = await fetch(url, { cache: "no-store" });
  return response.json();
}

async function joinGalleryItems(photoPrefix, metaPrefix) {
  const [photos, metas] = await Promise.all([listAll(photoPrefix), listAll(metaPrefix)]);
  const metadataById = new Map();

  await Promise.all(
    metas.map(async (blob) => {
      metadataById.set(extractId(blob.pathname), await fetchMetadata(blob.url));
    }),
  );

  return photos
    .map((blob) => {
      const id = extractId(blob.pathname);
      const metadata = metadataById.get(id) || {};

      return {
        id,
        imageUrl: blob.url,
        uploadedAt: blob.uploadedAt,
        submitterName: metadata.submitterName || "Anonymous",
        stallTitle: metadata.stallTitle || "Lovely stall idea",
        stallStory: metadata.stallStory || "",
      };
    })
    .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
}

export async function listApprovedItems() {
  return joinGalleryItems(IMAGE_PREFIX_APPROVED, META_PREFIX_APPROVED);
}

export async function listPendingItems() {
  return joinGalleryItems(IMAGE_PREFIX_PENDING, META_PREFIX_PENDING);
}

export async function savePendingUpload({ file, submitterName, stallTitle, stallStory }) {
  const id = buildId();
  const ext = extensionFromFile(file);
  const fileSlug = slugify(stallTitle || file.name || "stall-photo");
  const imagePath = `${IMAGE_PREFIX_PENDING}${id}__${fileSlug}.${ext}`;
  const metaPath = `${META_PREFIX_PENDING}${id}.json`;

  const imageBlob = await put(imagePath, file, {
    access: "public",
    addRandomSuffix: false,
    contentType: file.type || "image/jpeg",
  });

  await put(
    metaPath,
    JSON.stringify(
      {
        id,
        submitterName: safeText(submitterName, "Anonymous"),
        stallTitle: safeText(stallTitle, "Lovely stall idea"),
        stallStory: String(stallStory || "").trim().slice(0, 600),
      },
      null,
      2,
    ),
    {
      access: "public",
      addRandomSuffix: false,
      contentType: "application/json",
    },
  );

  return {
    id,
    imageUrl: imageBlob.url,
  };
}

export async function approvePendingItem(id) {
  const [photoList, metaList] = await Promise.all([
    listAll(IMAGE_PREFIX_PENDING),
    listAll(META_PREFIX_PENDING),
  ]);
  const photoBlob = photoList.find((blob) =>
    blob.pathname.startsWith(`${IMAGE_PREFIX_PENDING}${id}__`),
  );
  const metaBlob = metaList.find((blob) => blob.pathname === `${META_PREFIX_PENDING}${id}.json`);

  if (!photoBlob || !metaBlob) {
    throw new Error("Pending photo not found.");
  }

  const targetPhoto = photoBlob.pathname.replace(IMAGE_PREFIX_PENDING, IMAGE_PREFIX_APPROVED);
  const targetMeta = metaBlob.pathname.replace(META_PREFIX_PENDING, META_PREFIX_APPROVED);

  await copy(photoBlob.url, targetPhoto, {
    access: "public",
    addRandomSuffix: false,
  });
  await copy(metaBlob.url, targetMeta, {
    access: "public",
    addRandomSuffix: false,
  });
  await del([photoBlob.url, metaBlob.url]);
}

export async function rejectPendingItem(id) {
  const [photoList, metaList] = await Promise.all([
    listAll(IMAGE_PREFIX_PENDING),
    listAll(META_PREFIX_PENDING),
  ]);
  const photoBlob = photoList.find((blob) =>
    blob.pathname.startsWith(`${IMAGE_PREFIX_PENDING}${id}__`),
  );
  const metaBlob = metaList.find((blob) => blob.pathname === `${META_PREFIX_PENDING}${id}.json`);

  const targets = [];
  if (photoBlob) {
    targets.push(photoBlob.url);
  }
  if (metaBlob) {
    targets.push(metaBlob.url);
  }

  if (targets.length) {
    await del(targets);
  }
}
