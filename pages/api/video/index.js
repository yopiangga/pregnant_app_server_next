import { initDB } from "service/db";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  const db = await initDB();
  await NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  try {
    const data = await db.collection("videos").find({}).toArray();

    return res.json(data);
  } catch (e) {
    return e;
  }
}
