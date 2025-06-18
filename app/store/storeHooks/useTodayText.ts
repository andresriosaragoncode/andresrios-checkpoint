import { useStore } from "../index";

const useSetTodayText = () => {
  const state = useStore((state: any) => state);
  const { setTodayText } = state;
  return (todayText: string) => {
    setTodayText(todayText);
  };
};

const useGetTodayText = () => {
  const state = useStore((state: any) => state);
  const { todayText } = state;
  return todayText;
};

export { useSetTodayText, useGetTodayText };
