import { startOfWeek } from "date-fns";

const getStartOfWeek = (startDate?: Date) => {
  const startDateWithDefault = startDate || new Date();
  const startTime = startOfWeek(startDateWithDefault, {
    weekStartsOn: 1,
  }).getTime();
  return startTime;
};

export { getStartOfWeek };
