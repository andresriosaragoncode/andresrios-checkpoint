import { getUserForPage } from "@auth/index";
import { format } from "date-fns";
import { getStandups } from "@/app/api/utils/mongo";

const getTodaysStandUp = async () => {
  const username = await getUserForPage();

  const query = {
    date: format(new Date(), "yyyy-MM-dd"),
    username,
  };
  const standups = await getStandups(query);
  return standups[0];
};

export { getTodaysStandUp };
