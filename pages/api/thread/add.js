import { initDB } from "service/db";

export default async function handler(req, res) {
  const db = await initDB();
  if (req.method === "POST") {
    const data = {
      user: res.body.user,
      title: req.body.title,
      body: req.body.body,
      likes: res.body.likes,
      replies: res.body.replies,
      createdAt: new Date(),
      updatedAt: null,
    };

    try {
      const result = await db.collection("threads").insertOne(data);

      return res.status(200).json({ message: "Berhasil submit", data: result });
    } catch (e) {
      return e;
    }
  } else {
    return res.status(200).json(null);
  }
}
