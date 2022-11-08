import { ObjectId } from "mongodb";
import { initDB } from "service/db";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  const db = await initDB();
  await NextCors(req, res, {
    methods: ["DELETE", "POST"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "POST") {
    try {
      const result = await db
        .collection("articles")
        .deleteOne({ _id: ObjectId(req.body._id) });

      return res.status(200).json({ message: "Berhasil delete", data: result });
    } catch (e) {
      return e;
    }
  } else {
    return res.status(200).json(null);
  }
}
