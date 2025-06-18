import { LoginForm } from "@components/LoginForm";
import { AuthorizationStatus } from "../api/auth/privileges";

const Unauthorized = ({
  authorizationStatus,
}: {
  authorizationStatus: AuthorizationStatus;
}) => {
  if (authorizationStatus === AuthorizationStatus.NOT_AUTHENTICATED)
    return (
      <div className="mt-20 mx-auto w-8/12 h-[400px] bg-gray-700 text-center rounded">
        <h1>You need to log in</h1>
        <LoginForm />
      </div>
    );
  return (
    <div className="mt-20 mx-auto w-8/12 h-[400px] bg-gray-700 p-10 text-lg  text-center rounded">
      You dont have privileges to view this page
    </div>
  );
};

export { Unauthorized };
