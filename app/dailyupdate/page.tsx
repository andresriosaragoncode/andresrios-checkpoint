import {
  AuthorizationStatus,
  getAuthorizationForPage,
  Privileges,
  getUserForPage,
} from "@auth/index";
import { Menu } from "@components/Menu";
import { Unauthorized } from "@components/Unauthorized";
import { CreateStandupForm } from "./CreateStandup";
import { Preview } from "./Preview";
import { getTodaysStandUp } from "@/app/api/utils/standup/getTodaysStandup";

export default async function Dashboard() {
  const authorization = await getAuthorizationForPage(
    Privileges.CREATE_STANDUP
  );
  if (authorization != AuthorizationStatus.AUTHORIZED) {
    return (
      <>
        <Menu />
        <Unauthorized authorizationStatus={authorization} />
      </>
    );
  }
  const standups = await getTodaysStandUp();
  const createdAtText = standups
    ? "Edit Todays Standup"
    : "Create todays Standup";

  return (
    <>
      <Menu />
      <div className="bg-gray-700 flex flex-col  bg-blue-200 xl:flex-col xl:w-1/2 mr-auto ml-auto">
        <div className="py-4 px-10">
          <h1 data-testid="createdAtText">{createdAtText}</h1>
        </div>
        <CreateStandupForm standup={standups} />
        <Preview />
      </div>
    </>
  );
}
