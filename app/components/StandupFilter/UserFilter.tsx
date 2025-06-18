"use client";

import { useSetUserFilter } from "@store/storeHooks";

const UserFilter = ({ users }: { users: any[] }) => {
  const setUserFilter = useSetUserFilter();

  const options = users.map((user, index) => (
    <option
      date-testid={`userOption_${index}`}
      key={user.username}
      value={user.username}
    >
      {user.username}
    </option>
  ));

  return (
    <div className="flex flex-col ">
      <label htmlFor="selectUserFilter" data-testid="selectUserFilter">
        Select User
      </label>
      <div className="mt-2" />
      <select
        className="rounded p-4 bg-gray-500"
        id="selectUserFilter_select"
        data-testid="selectUserFilter_select"
        onChange={(e) => setUserFilter(e.target.value)}
      >
        {options}
      </select>
    </div>
  );
};

export { UserFilter };
