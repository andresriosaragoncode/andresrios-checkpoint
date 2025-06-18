import clientPromise from "../utils/mongo/connect";
import { addStandupMetadata } from "../utils/standup/addStandupMetadata";
import { env } from "@/app/env";

const insertStandup = async (
  yesterday: string,
  today: string,
  blockers: string,
  username: string
) => {
  const client = await clientPromise;
  const db = client.db(env.databaseName);
  const standupObject = addStandupMetadata({
    yesterday,
    today,
    blockers,
    username,
  });

  const query = {
    username,
    date: standupObject.date,
  };
  const items = await db
    .collection("standups")
    .updateOne(query, { $set: standupObject }, { upsert: true });
  return items;
};

export { insertStandup };
