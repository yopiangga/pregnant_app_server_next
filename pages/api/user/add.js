import { initDB } from "service/db";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  const db = await initDB();
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "POST") {
    const data = {
      kk: req.body.kk,
      nik: req.body.nik,
      type: req.body.type,
      fullName: req.body.fullName,
      email: req.body.email,
      address: req.body.address,
      status: req.body.status,
      phoneNumber: req.body.phoneNumber,
      profilePhotoPath: req.body.profilePhotoPath,
      createdAt: new Date(),
      updatedAt: null,
    };

    try {
      const result = await db.collection("users").insertOne(data);

      return res.status(200).json({ message: "Berhasil submit", data: result });
    } catch (e) {
      return e;
    }
  } else {
    return res.status(200).json(null);
  }
}
