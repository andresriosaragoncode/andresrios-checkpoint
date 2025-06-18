import { add } from "date-fns";
import { insertMany } from "./mongo/insertMany";
import { drop } from "./mongo/drop";
import { addStandupMetadata } from "./standup/addStandupMetadata";
import bcrypt from "bcrypt";

const seedStandups = async () => {
  await drop("standups");
  await drop("users");
  const masterPassword = await bcrypt.hash("masterPassword", 10);
  const MAX = 20;
  const teamMembers = [
    { name: "bob", skipped: 12 },
    { name: "jon", skipped: 5 },
    { name: "lucy", skipped: 6 },
    { name: "andres", skipped: 0 },
  ];

  const users = teamMembers.map((teamMember) => {
    return {
      username: teamMember.name,
      profile: "admin",
      hashedPassword: masterPassword,
    };
  });

  const standup = (index: number) => {
    const newDate = add(new Date(), {
      days: -index,
    });
    const memberStandups = teamMembers
      .map((teamMember: any) => {
        if (index != teamMember.skipped) {
          const withMetadata = addStandupMetadata(
            {
              yesterday: `this is yesterday ${index}`,
              today: `this is today ${index}`,
              blockers: `this is blocker ${index}`,
              username: teamMember.name,
            },
            newDate
          );
          return withMetadata;
        }
      })
      .filter(Boolean);
    return memberStandups;
  };
  const standups = [];
  for (let i = 1; i <= MAX; i++) {
    standups.push(standup(i));
  }
  const items = standups.flat();
  const result = await insertMany(items, "standups");
  const result2 = await insertMany(users, "users");
};

export { seedStandups };
