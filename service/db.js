import clientPromise from "lib/mongodb";

export async function initDB() {
  const client = await clientPromise;
  const db = client.db("pregnant_app");

  return db;
}
