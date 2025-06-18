import { getAuthorization } from "@auth/getAuthorization";
import { getServerSession } from "next-auth/next";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { authOptions } from "@auth/[...nextauth]/auth";
import { Privileges } from "@auth/privileges";
import { getLastStandupPerUser } from "../utils/mongo/getLastStandupPerUser";

const dynamic = "force-dynamic";

interface NewStandupParams {
  yesterday: string;
  today: string;
  blockers: string;
  userDate: string;
}
const GET = async (req: NextRequest) => {
  const token = (await headers()).get("authorization");
  const session = await getServerSession(authOptions);
  const isAuthorized = getAuthorization(
    token,
    session,
    Privileges.GET_ALL_STANDUPS
  );
  if (!isAuthorized) {
    return new Response(JSON.stringify({ error: "Not authorized" }), {
      status: 403,
    });
  }

  const standups = await getLastStandupPerUser();

  return new Response(JSON.stringify({ standups }));
};

export { GET };
