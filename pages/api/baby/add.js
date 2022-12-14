import { initDB } from "service/db";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  const db = await initDB();
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "POST") {
    const data = {
      mother: res.body.mother,
      ttl: {
        city: req.body.ttl.city,
        date: req.body.ttl.date,
      },
      name: req.body.name,
      picture: req.body.picture,
      nik: req.body.nik,
      kk: req.body.kk,
      growth: [],
      createdAt: new Date(),
      updatedAt: null,
    };

    try {
      const result = await db.collection("babys").insertOne(data);

      return res.status(200).json({ message: "Berhasil submit", data: result });
    } catch (e) {
      return e;
    }
  } else {
    return res.status(200).json(null);
  }
}
