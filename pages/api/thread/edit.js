import { ObjectId } from "mongodb";
import { initDB } from "service/db";

export default async function handler(req, res) {
  const db = await initDB();
  if (req.method === "POST") {
    const data = {
      ...req.body.data,
      updatedAt: new Date(),
    };

    try {
      const result = await db
        .collection("threads")
        .updateOne({ _id: ObjectId(req.body._id) }, { $set: data });

      return res.status(200).json({ message: "Berhasil update", data: result });
    } catch (e) {
      return e;
    }
  } else {
    return res.status(200).json(null);
  }
}
