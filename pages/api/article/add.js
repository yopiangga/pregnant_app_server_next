import { initDB } from "service/db";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  const db = await initDB();
  await NextCors(req, res, {
    methods: ["POST"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "POST") {
    const data = {
      type: req.body.type,
      title: req.body.title,
      description: req.body.description,
      user: req.body.user,
      url: req.body.url,
      thumbnail: req.body.thumbnail,
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
