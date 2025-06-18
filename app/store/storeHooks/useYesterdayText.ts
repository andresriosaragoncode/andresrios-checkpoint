import { useStore } from "../index";

const useSetYesterdayText = () => {
  const state = useStore((state: any) => state);
  const { setYesterdayText } = state;
  return (todayText: string) => {
    setYesterdayText(todayText);
  };
};

const useGetYesterdayText = () => {
  const state = useStore((state: any) => state);
  const { yesterdayText } = state;
  return yesterdayText;
};

export { useSetYesterdayText, useGetYesterdayText };
