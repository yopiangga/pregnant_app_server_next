import { initDB } from "service/db";
import NextCors from "nextjs-cors";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const db = await initDB();
  const { id } = req.query;
  await NextCors(req, res, {
    methods: ["GET"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  try {
    const data = await db
      .collection("types-edu")
      .findOne({ _id: ObjectId(id) });
    return res.json(data);
  } catch (e) {
    return e;
  }
}
