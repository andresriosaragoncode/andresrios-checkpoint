import clientPromise from "./connect";
import { env } from "@/app/env";

const drop = async (collection: string) => {
  const client = await clientPromise;
  const db = client.db(env.databaseName);
  await db.collection(collection).drop({
    writeConcern: { w: 1, j: true },
  });
};

export { drop };
