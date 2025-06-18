import { getStandups } from "../utils/mongo/getStandups";

const getAllStandups = async (
  startTime: number,
  endTime: number,
  username?: string | null
) => {
  const query = Boolean(username)
    ? {
        createdAt: { $gt: startTime, $lt: endTime },
        username,
      }
    : { createdAt: { $gt: startTime, $lt: endTime } };
  const standups = await getStandups(query);
  return standups;
};

export { getAllStandups };
