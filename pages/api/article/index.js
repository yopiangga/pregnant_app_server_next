import { initDB } from "service/db";

export default async function handler(req, res) {
  const db = await initDB();
  try {
    const data = await db.collection("articles").find({}).toArray();

    return res.json(data);
  } catch (e) {
    return e;
  }
}
