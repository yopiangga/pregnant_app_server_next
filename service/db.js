import clientPromise from "lib/mongodb";

export async function initDB() {
  const client = await clientPromise;
  const db = client.db("PregnantApp");

  return db;
}
