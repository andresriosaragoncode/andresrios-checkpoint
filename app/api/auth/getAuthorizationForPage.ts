import { getSession } from "./[...nextauth]/auth";
import { Privileges } from "./privileges";
import { getAuthorization } from "./getAuthorization";

const getAuthorizationForPage = async (privilege: Privileges) => {
  const session = await getSession();
  const authorization = getAuthorization(session, null, privilege);
  return authorization;
};

export { getAuthorizationForPage };
