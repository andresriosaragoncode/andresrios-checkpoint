import {
  AuthorizationStatus,
  getAuthorizationForPage,
  Privileges,
} from "@auth/index";
import { Menu } from "@components/Menu";
import { Unauthorized } from "@components/Unauthorized";
import { startOfWeek } from "date-fns";
import { getStandups } from "../api/utils/mongo/getStandups";
import { SummaryTable } from "./summaryTable";
import { getTodaysStandUp } from "@/app/api/utils/standup/getTodaysStandup";

export default async function Dashboard() {
  const query = {
    createdAt: {
      $gt: startOfWeek(new Date()).getTime(),
      $lt: new Date().getTime(),
    },
  };
  const authorization = await getAuthorizationForPage(
    Privileges.GET_ALL_STANDUPS
  );
  if (authorization != AuthorizationStatus.AUTHORIZED) {
    return (
      <>
        <Menu />
        <Unauthorized authorizationStatus={authorization} />
      </>
    );
  }
  const todaysStandup = await getTodaysStandUp();
  const standups = await getStandups(query);
  const createdAtText = todaysStandup
    ? "You can edit todays standup"
    : "Remember to Create todays Standup";
  return (
    <>
      <Menu />
      <div className="relative overflow-x-auto w-full xl:w-8/12 mr-auto ml-auto">
        <div className="mt-4" />
        <h1 data-testid="createdAtText">{createdAtText}</h1>
        <div className="mt-4" />
        <SummaryTable standups={standups} />
      </div>
    </>
  );
}
