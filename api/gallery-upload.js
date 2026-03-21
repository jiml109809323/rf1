import { json, safeText, savePendingUpload } from "./_gallery-utils.js";

export async function PUT(request) {
  try {
    const form = await request.formData();
    const file = form.get("stallPhoto");

    if (!(file instanceof File)) {
      return json({ error: "Please choose a photo to upload." }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return json({ error: "Please upload an image file." }, { status: 400 });
    }

    if (file.size > 4_000_000) {
      return json({ error: "Please keep photos under 4MB." }, { status: 400 });
    }

    const result = await savePendingUpload({
      file,
      submitterName: safeText(form.get("submitterName"), "Anonymous"),
      stallTitle: safeText(form.get("stallTitle"), "Lovely stall idea"),
      stallStory: form.get("stallStory"),
    });

    return json({
      ok: true,
      message: "Photo sent for review.",
      ...result,
    });
  } catch (error) {
    return json(
      { error: error.message || "Upload failed. Please try again." },
      { status: 500 },
    );
  }
}
