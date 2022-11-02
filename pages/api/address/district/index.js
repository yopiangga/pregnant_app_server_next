import districts from "./3573.json" assert { type: "json" };

export default async function handler(req, res) {
  return res.json(districts);
}
