import { groupSummaryByUsers } from "../api/utils/standup/groupSummaryByUsers";

const getRowData = (standups: any, days: string[]) => {
  const groupedByUsers = groupSummaryByUsers(standups);

  const users = Object.keys(groupedByUsers);
  const rowData = users.map((user) => {
    const currentUser = groupedByUsers[
      user as keyof typeof groupedByUsers
    ] as any;
    const mapped = days.map((__day, index) => {
      if (index === 0) {
        return {
          user: user,
          dayOfWeek: index,
          label: user,
        };
      }
      const found = currentUser.find((daily: any) => {
        return daily.dayOfWeek === index;
      });
      const result = found
        ? {
            today: `Today:${found.today.substring(0, 10)}`,
            blockers: `Blockers:${found.blockers.substring(0, 10)}`,
            username: found.username,
            yesterday: found.yesterday,
            dayOfWeek: found.dayOfWeek,
            date: found.date,
          }
        : {
            user: user,
            dayOfWeek: index,
            label: "skipped",
          };
      return result;
    });
    return mapped;
  });
  return rowData;
};

export { getRowData };
