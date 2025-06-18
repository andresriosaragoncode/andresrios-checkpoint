import { authOptions } from "@auth/[...nextauth]/auth";
import { getAuthorization, getUserForApi } from "@auth/index";
import { getServerSession } from "next-auth/next";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Privileges } from "../auth/privileges";
import { getAllStandups } from "./getAllStandups";
import { insertStandup } from "./insertStandup";

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
    session,
    token,
    Privileges.GET_ALL_STANDUPS
  );
  if (!isAuthorized) {
    return new Response(JSON.stringify({ error: "Not authorized" }), {
      status: 403,
    });
  }

  const searchParams = req.nextUrl.searchParams;
  const startTimeParam = searchParams.get("starttime");
  const endTimeParam = searchParams.get("endtime");
  const username = searchParams.get("username");

  if (!startTimeParam || !endTimeParam) {
    return new Response(
      JSON.stringify({ error: "Must include start and end time" }),
      {
        status: 400,
      }
    );
  }
  const standups = await getAllStandups(
    parseInt(startTimeParam),
    parseInt(endTimeParam),
    username
  );
  return new Response(JSON.stringify({ standups }));
};

const POST = async (request: NextRequest) => {
  const params = await request.json();
  const { yesterday, today, blockers } = params;
  const token = (await headers()).get("authorization");
  const session = await getServerSession(authOptions);
  const isAuthorized = getAuthorization(
    session,
    token,
    Privileges.CREATE_STANDUP
  );
  if (!isAuthorized) {
    return new Response(JSON.stringify({ error: "Not authorized" }), {
      status: 403,
    });
  }
  const createdBy = getUserForApi(session, token);
  await insertStandup(yesterday, today, blockers, createdBy);
  return new Response(JSON.stringify({ response: "standup created" }), {
    status: 201,
  });
};

export { dynamic, GET, POST };
