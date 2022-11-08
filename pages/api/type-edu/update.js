import { ObjectId } from "mongodb";
import { initDB } from "service/db";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  const db = await initDB();
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  if (req.method === "PUT") {
    const data = {
      ...req.body.data,
      updatedAt: new Date(),
    };

    try {
      const result = await db
        .collection("types-edu")
        .updateOne({ _id: ObjectId(req.body._id) }, { $set: data });

      return res.status(200).json({ message: "Berhasil update", data: result });
    } catch (e) {
      return e;
    }
  } else {
    return res.status(200).json(null);
  }
}
