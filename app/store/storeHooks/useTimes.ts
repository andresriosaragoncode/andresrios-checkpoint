import { useStore } from "../index";

const useSetStartTime = () => {
  const state = useStore((state: any) => state);
  const { setStartTime } = state;
  return (Time: string) => {
    const asInt = new Date(Time).getTime();
    setStartTime(asInt);
  };
};

const useGetStartTime = () => {
  const state = useStore((state: any) => state);
  const { startTime } = state;
  return startTime;
};

const useSetEndTime = () => {
  const state = useStore((state: any) => state);
  const { setEndTime } = state;
  return (Time: string) => {
    const asInt = new Date(Time).getTime();
    setEndTime(asInt);
  };
};

const useGetEndTime = () => {
  const state = useStore((state: any) => state);
  const { endTime } = state;
  return endTime;
};

export { useGetStartTime, useGetEndTime, useSetEndTime, useSetStartTime };
