import { ObjectId } from "mongodb";
import { initDB } from "service/db";

export default async function handler(req, res) {
  const db = await initDB();
  if (req.method === "DELETE") {
    try {
      const result = await db
        .collection("threads")
        .deleteOne({ _id: ObjectId(req.body._id) });

      return res.status(200).json({ message: "Berhasil delete", data: result });
    } catch (e) {
      return e;
    }
  } else {
    return res.status(200).json(null);
  }
}
