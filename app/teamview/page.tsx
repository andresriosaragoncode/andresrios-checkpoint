import React from "react";
import { Menu } from "@components/Menu";
import { getSession } from "../api/auth/[...nextauth]/auth";
import { getAllUsers } from "../api/utils/mongo/getUser";
import { getLastStandupPerUser } from "../api/utils/mongo/getLastStandupPerUser";
import { Filter } from "@components/StandupFilter";
import { StandupList } from "@components/StandupList";

export default async function Teamview() {
  const session = await getSession();
  if (!session) {
    return <div>You must be logged in to see this page</div>;
  }
  const {
    user: { profile },
  } = session;
  const allUsers = await getAllUsers();
  const standups = await getLastStandupPerUser();
  return (
    <>
      <Menu />
      <div className="px-4 my-4">
        <h1>Team View</h1>
      </div>
      {standups && <StandupList data={standups} />}clear
    </>
  );
}
