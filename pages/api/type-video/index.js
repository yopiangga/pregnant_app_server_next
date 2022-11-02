import { initDB } from "service/db";

export default async function handler(req, res) {
  const db = await initDB();
  try {
    const data = await db.collection("types-video").find({}).toArray();

    return res.json(data);
  } catch (e) {
    return e;
  }
}