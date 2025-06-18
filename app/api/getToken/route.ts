import { env } from "@/app/env";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { authorizeUser } from "../auth/authorizeUser";

const dynamic = "force-dynamic";

const POST = async (request: NextRequest) => {
  const params = await request.json();
  const { password, username } = params;
  const user = (await authorizeUser(username, password)) as any;
  const token = jwt.sign(user, env.authSecret, { expiresIn: "30 days" });

  return new Response(JSON.stringify({ token }), {
    status: 200,
  });
};

export { dynamic, POST };
