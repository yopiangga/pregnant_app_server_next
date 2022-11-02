import { initDB } from "service/db";

export default async function handler(req, res) {
  const db = await initDB();
  if (req.method === "POST") {
    const data = {
      type_id: res.body.type_id,
      title: req.body.title,
      index: req.body.index,
      createdAt: new Date(),
      updatedAt: null,
    };

    try {
      const result = await db.collection("types-video").insertOne(data);

      return res.status(200).json({ message: "Berhasil submit", data: result });
    } catch (e) {
      return e;
    }
  } else {
    return res.status(200).json(null);
  }
}
