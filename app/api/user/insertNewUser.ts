import clientPromise from "../utils/mongo/connect";
import { env } from "@/app/env";

const insertNewUser = async (
  username: string,
  hashedPassword: string,
  profile: string
) => {
  const client = await clientPromise;
  const db = client.db(env.databaseName);
  const items = await db
    .collection("users")
    .insertOne({ username, hashedPassword, profile });

  return items;
};

export { insertNewUser };
