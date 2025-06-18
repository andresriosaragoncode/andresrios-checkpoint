import { env } from "@/app/env";
import jwt from "jsonwebtoken";

const getUserForApi = (session: any | null, token: string | null) => {
  const decoded = token ? jwt.verify(token, env.authSecret) : session?.user;
  const user = decoded.username;
  return user;
};

export { getUserForApi };
