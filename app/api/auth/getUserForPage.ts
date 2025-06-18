import { getSession } from "./[...nextauth]/auth";

const getUserForPage = async () => {
  const session = await getSession();
  return session?.user?.username;
};

export { getUserForPage };
