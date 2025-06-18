"use client";
import { useEffect } from "react";
import { Filter } from "@components/StandupFilter";
import {
  useGetStartTime,
  useGetEndTime,
  useSetStandupList,
  useGetStandupList,
  useGetUserFilter,
} from "@store/storeHooks";
import { StandupList } from "@components/StandupList";

const StandupContainer = ({ users, profile }: any) => {
  const startTime = useGetStartTime();
  const endTime = useGetEndTime();
  const userFilter = useGetUserFilter();
  const setStandupList = useSetStandupList();
  const standupList = useGetStandupList();
  const query = userFilter
    ? `/api/standup?starttime=${startTime}&endtime=${endTime}&username=${userFilter}`
    : `/api/standup?starttime=${startTime}&endtime=${endTime}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(query, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setStandupList(result.standups);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [query, setStandupList]);

  return (
    <div>
      <Filter profile={profile} users={users} />
      {standupList && <StandupList data={standupList} />}
    </div>
  );
};

export { StandupContainer };
