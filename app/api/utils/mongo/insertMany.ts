import clientPromise from "./connect";
import { env } from "@/app/env";

const insertMany = async (items: any[], collection: string) => {
  const client = await clientPromise;
  const db = client.db(env.databaseName);
  await db.collection(collection).insertMany(items);
};

export { insertMany };
