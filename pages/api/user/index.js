import { initDB } from "service/db";

export default async (req, res) => {
  const db = await initDB();
  try {
    const data = await db.collection("users").find({}).toArray();

    return res.json(data);
  } catch (e) {
    console.error(e);
  }
};
