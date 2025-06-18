import { env } from "@/app/env";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUser } from "../utils/mongo/getUser";
import { privileges } from "./privileges";

const authorizeUser = async (username: string, plainPassword: string) => {
  if (env.noAuth === "true") {
    const userPrivileges =
      privileges[env.mockUserProfile as keyof typeof privileges];
    return {
      username: "mockuser",
      profile: env.mockUserProfile,
      userPrivileges,
    };
  }
  const item = await getUser(username);
  if (item) {
    const { profile, username, hashedPassword } = item;
    const isValid = await bcrypt.compare(plainPassword, hashedPassword);
    if (!isValid) {
      return null;
    }

    const userPrivileges = privileges[profile as keyof typeof privileges];
    return {
      username,
      profile,
      userPrivileges,
    };
  }
  return null;
};

export { authorizeUser };
