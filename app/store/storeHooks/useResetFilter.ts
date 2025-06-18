import { useStore } from "../index";

const useResetFilter = () => {
  const state = useStore((state: any) => state);
  const { resetFilter } = state;
  return () => {
    resetFilter();
  };
};

export { useResetFilter };
