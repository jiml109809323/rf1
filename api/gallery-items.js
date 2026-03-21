import {
  isAuthorized,
  json,
  listApprovedItems,
  listPendingItems,
} from "./_gallery-utils.js";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const mode = searchParams.get("mode") || "approved";

    if (mode === "pending") {
      if (!isAuthorized(request)) {
        return json({ error: "Unauthorized. Check your admin password." }, { status: 401 });
      }

      return json({ items: await listPendingItems() });
    }

    return json({ items: await listApprovedItems() });
  } catch (error) {
    return json(
      { error: error.message || "Could not load gallery items." },
      { status: 500 },
    );
  }
}
