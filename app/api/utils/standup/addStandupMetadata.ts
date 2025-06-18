import { format } from "date-fns";

const addStandupMetadata = (standup: any, date?: any) => {
  const dateTemplate = date || new Date();
  const dayOfWeek = dateTemplate.getDay();
  return {
    ...standup,
    date: format(dateTemplate, "yyyy-MM-dd"),
    createdAt: dateTemplate.getTime(),
    dayOfWeek,
    lastIndex: `${dateTemplate.getTime()}_${standup.username}`,
  };
};

export { addStandupMetadata };
