import { useStore } from "../index";

const useSetBlockerText = () => {
  const state = useStore((state: any) => state);
  const { setBlockerText } = state;
  return (BlockerText: string) => {
    setBlockerText(BlockerText);
  };
};

const useGetBlockerText = () => {
  const state = useStore((state: any) => state);
  const { blockerText } = state;
  return blockerText;
};

export { useSetBlockerText, useGetBlockerText };
