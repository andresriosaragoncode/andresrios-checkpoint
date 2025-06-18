import { useStore } from "../index";

const useSetStandupList = () => {
  const state = useStore((state: any) => state);
  const { setStandupList } = state;
  return (StandupList: any) => {
    setStandupList(StandupList);
  };
};

const useGetStandupList = () => {
  const state = useStore((state: any) => state);
  const { standupList } = state;
  return standupList;
};

export { useSetStandupList, useGetStandupList };
