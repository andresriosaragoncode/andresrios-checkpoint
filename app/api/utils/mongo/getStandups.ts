import clientPromise from "./connect";
import { env } from "@/app/env";

const getStandups = async (query: any) => {
  const client = await clientPromise;
  const db = client.db(env.databaseName);
  const items = await db
    .collection("standups")
    .find(query, {
      projection: {
        blockers: 1,
        createdAt: 1,
        date: 1,
        dayOfWeek: 1,
        today: 1,
        username: 1,
        yesterday: 1,
        _id: 0,
      },
    })
    .toArray();
  return items;
};

export { getStandups };
