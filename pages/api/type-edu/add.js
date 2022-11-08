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
      type_id: req.body.type_id,
      title: req.body.title,
      index: req.body.index,
      createdAt: new Date(),
      updatedAt: null,
    };

    try {
      const result = await db.collection("types-edu").insertOne(data);

      return res.status(200).json({ message: "Berhasil submit", data: result });
    } catch (e) {
      return e;
    }
  } else {
    return res.status(200).json(null);
  }
}
