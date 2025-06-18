import { env } from "@/app/env";
import jwt from "jsonwebtoken";
import { Privileges, AuthorizationStatus } from "../auth/privileges";

const getAuthorization = (
  session: any | null,
  token: string | null,
  privilege: Privileges
) => {
  const decoded = token ? jwt.verify(token, env.authSecret) : session?.user;
  if (!decoded) {
    return AuthorizationStatus.NOT_AUTHENTICATED;
  }
  const hasPrivilege = decoded.userPrivileges.includes(privilege);
  if (!hasPrivilege) {
    return AuthorizationStatus.UNAUTHORIZED;
  }
  return AuthorizationStatus.AUTHORIZED;
};

export { getAuthorization };
