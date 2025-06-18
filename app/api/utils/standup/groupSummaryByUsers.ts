import { groupBy, prop } from "ramda";

const groupSummaryByUsers = (summary: any) => {
  const usernameProp = prop("username");
  // @ts-ignore
  // this appear to be a bug in the type definition of ramda
  const groupByUserName = groupBy(usernameProp, summary);
  return groupByUserName;
};

export { groupSummaryByUsers };
