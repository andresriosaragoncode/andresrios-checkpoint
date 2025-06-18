import { authOptions } from "@auth/[...nextauth]/auth";
import { getAuthorization } from "@auth/getAuthorization";
import { Privileges } from "@auth/privileges";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth/next";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { insertNewUser } from "./insertNewUser";
import { validateUserExists } from "./validateUserExists";

const dynamic = "force-dynamic";

interface NewUserParams {
  username: string;
  password: string;
  profile: string;
}

const createUser = async (params: NewUserParams) => {
  const { username, password, profile } = params;
  const alreadyExist = await validateUserExists(username);
  if (alreadyExist) {
    return { result: { error: "User already exists" }, status: 422 };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await insertNewUser(username, hashedPassword, profile);
  return { result: { response: "user created" }, status: 201 };
};

const POST = async (request: NextRequest) => {
  // User registration
  const params = await request.json();
  const { result, status } = await createUser(params);
  return new Response(JSON.stringify(result), {
    status,
  });
};

export { dynamic, POST };
