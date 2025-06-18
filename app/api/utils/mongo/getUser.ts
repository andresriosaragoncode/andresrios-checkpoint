import clientPromise from "./connect";
import { env } from "@/app/env";

const getUser = async (username: string) => {
  const client = await clientPromise;
  const db = client.db(env.databaseName);
  const items = await db.collection("users").findOne({ username });
  return items;
};

const getAllUsers = async () => {
  const client = await clientPromise;
  const db = client.db(env.databaseName);
  const items = await db
    .collection("users")
    .find(
      {},
      {
        projection: {
          username: 1,
          _id: 0,
        },
      }
    )
    .toArray();
  return items;
};

export { getUser, getAllUsers };
