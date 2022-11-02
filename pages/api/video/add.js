import { initDB } from "service/db";

export default async function handler(req, res) {
  const db = await initDB();
  if (req.method === "POST") {
    const data = {
      user: res.body.user,
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      url: req.body.url,
      createdAt: new Date(),
      updatedAt: null,
    };

    try {
      const result = await db.collection("videos").insertOne(data);

      return res.status(200).json({ message: "Berhasil submit", data: result });
    } catch (e) {
      return e;
    }
  } else {
    return res.status(200).json(null);
  }
}
