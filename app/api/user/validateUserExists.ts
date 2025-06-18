import { getUser } from "../utils/mongo/getUser";

const validateUserExists = async (username: string) => {
  const items = await getUser(username);
  if (items) {
    return true;
  }
  return false;
};

export { validateUserExists };
