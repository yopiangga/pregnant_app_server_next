import { initDB } from "service/db";

export async function handler(req, res) {
  const db = await initDB();
  try {
    const data = await db.collection("users").find({}).toArray();

    return res.json(data);
  } catch (e) {
    return e;
  }
}
