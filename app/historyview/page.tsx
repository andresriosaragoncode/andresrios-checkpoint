import { Menu } from "@components/Menu";
import { StandupContainer } from "./StandupContainer";
import { getSession } from "../api/auth/[...nextauth]/auth";
import { getAllUsers } from "../api/utils/mongo/getUser";

export default async function HistoryView() {
  const session = await getSession();
  if (!session) {
    return <div>You must be logged in to see this page</div>;
  }
  const {
    user: { username, profile },
  } = session;
  const allUsers = await getAllUsers();
  return (
    <>
      <Menu />
      <StandupContainer
        username={username}
        profile={profile}
        users={allUsers}
      />
    </>
  );
}
