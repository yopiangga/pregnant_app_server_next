import { initDB } from "service/db";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  const db = await initDB();
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const { email } = req.query;

  try {
    const data = await db.collection("users").find({ email: email }).toArray();

    return res.json(data);
  } catch (e) {
    return e;
  }
}
