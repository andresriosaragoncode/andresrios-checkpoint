import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { getStartOfWeek } from "../api/utils/startOfWeek";

const useStore = create()(
  devtools(
    persist(
      (set) => ({
        todayText: "",
        yesterdayText: "",
        startTime: getStartOfWeek(),
        endTime: new Date().getTime(),
        standupList: [],
        userFilter: null,
        resetFilter: () =>
          set(() => ({
            userFilter: null,
            startTime: getStartOfWeek(),
            endTime: new Date().getTime(),
          })),
        setTodayText: (todayText: string) =>
          set(() => ({
            todayText: todayText,
          })),
        setYesterdayText: (yesterdayText: string) =>
          set(() => ({
            yesterdayText: yesterdayText,
          })),
        setBlockerText: (blockerText: string) =>
          set(() => ({
            blockerText: blockerText,
          })),
        setStartTime: (startTime: string) =>
          set(() => ({
            startTime: startTime,
          })),
        setEndTime: (endTime: string) =>
          set(() => ({
            endTime: endTime,
          })),
        setStandupList: (standupList: any) =>
          set(() => ({
            standupList: standupList,
          })),
        setUserFilter: (userFilter: any) =>
          set(() => ({
            userFilter: userFilter,
          })),
      }),
      {
        name: "checkpoint-storage",
      }
    )
  )
);

export { useStore };
