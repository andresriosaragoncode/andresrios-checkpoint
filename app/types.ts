enum Profile {
  ADMIN = "admin",
  DEVELOPER = "dev",
  PO = "po",
}

interface Standup {
  yesterday: string;
  today: string;
  blockers: string;
}

interface StandupRecord {
  yesterday: string;
  today: string;
  blockers: string;
  username: string;
  date: string;
  createdAt: number;
  lastIndex: string;
}

interface User {
  username: string;
  password: string;
  profile: string;
}

export type { Standup, Profile, StandupRecord, User };
