import { json, rejectPendingItem, requireAdmin } from "./_gallery-utils.js";

export async function POST(request) {
  try {
    requireAdmin(request);
    const { id } = await request.json();

    if (!id) {
      return json({ error: "Missing gallery item id." }, { status: 400 });
    }

    await rejectPendingItem(id);
    return json({ ok: true });
  } catch (error) {
    if (error instanceof Response) {
      return error;
    }

    return json(
      { error: error.message || "Could not reject this photo." },
      { status: 500 },
    );
  }
}
