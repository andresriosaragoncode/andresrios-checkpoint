import { useStore } from "../index";

const useSetUserFilter = () => {
  const state = useStore((state: any) => state);
  const { setUserFilter } = state;
  return (todayText: string) => {
    setUserFilter(todayText);
  };
};

const useGetUserFilter = () => {
  const state = useStore((state: any) => state);
  const { userFilter } = state;
  return userFilter;
};

export { useSetUserFilter, useGetUserFilter };
