"use client";
import { DateFilter } from "./DateFilter";
import { UserFilter } from "./UserFilter";
import { useResetFilter } from "@store/storeHooks";

const Filter = ({ profile, users }: any) => {
  const resetFilter = useResetFilter();
  return (
    <div className="bg-gray-400 p-4 ">
      <div className="relative flex">Filter</div>
      <DateFilter />
      {users && profile === "admin" && <UserFilter users={users} />}
      <button
        onClick={() => {
          resetFilter();
        }}
      >
        Clear
      </button>
    </div>
  );
};

export { Filter };
