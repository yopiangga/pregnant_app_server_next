import { initDB } from "service/db";

export default async function handler(req, res) {
  const db = await initDB();
  if (req.method === "POST") {
    const data = {
      title: req.body.title,
      description: req.body.description,
      user: res.body.user,
      url: res.body.url,
      thumbnail: res.body.thumbnail,
      createdAt: new Date(),
      updatedAt: null,
    };

    try {
      const result = await db.collection("articles").insertOne(data);

      return res.status(200).json({ message: "Berhasil submit", data: result });
    } catch (e) {
      return e;
    }
  } else {
    return res.status(200).json(null);
  }
}
