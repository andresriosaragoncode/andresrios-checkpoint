import clientPromise from "./connect";
import { env } from "@/app/env";

const getLastStandupPerUser = async () => {
  const client = await clientPromise;
  const db = client.db(env.databaseName);
  const itemsFromAggregation = await db
    .collection("standups")
    .aggregate([
      { $sort: { username: 1, createdAt: 1 } },
      {
        $group: {
          _id: { username: "$username" },
          createdAt: { $last: "$createdAt" },
        },
      },
    ])
    .toArray();
  // THERE MUST BE AN EASIER WAY TO GET THE ITEMS FROM A PROJECTION
  // WILL IMPROVE IN A FUTURE RELEASE
  const indices = itemsFromAggregation.map((item: any) => {
    return `${item.createdAt}_${item._id.username}`;
  });
  const foundItems = await db
    .collection("standups")
    .find(
      { lastIndex: { $in: indices } },
      {
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
      }
    )
    .toArray();
  return foundItems;
};

export { getLastStandupPerUser };
