import d3573010 from "./3573010.json" assert { type: "json" };
import d3573020 from "./3573020.json" assert { type: "json" };
import d3573030 from "./3573030.json" assert { type: "json" };
import d3573040 from "./3573040.json" assert { type: "json" };
import d3573050 from "./3573050.json" assert { type: "json" };
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  let data = [];
  switch (req.query.id) {
    case "357301":
      data = d3573010;
      break;
    case "357302":
      data = d3573020;
      break;
    case "357303":
      data = d3573030;
      break;
    case "357304":
      data = d3573040;
      break;
    case "357305":
      data = d3573050;
      break;
  }

  return res.status(200).json({ message: "Berhasil Get data", data: data });
}
