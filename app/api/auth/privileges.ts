interface Profiles {
  admin: string[];
  dev: string[];
  PO: string[];
  cypress: string[];
}

enum Privileges {
  CREATE_STANDUP = "createStandup",
  GET_ALL_STANDUPS = "getAllStandups",
  SEED = "seed",
}

enum AuthorizationStatus {
  AUTHORIZED = "authorized",
  UNAUTHORIZED = "unauthorized",
  NOT_AUTHENTICATED = "notAuthenticated",
}

const privileges = {
  admin: [Privileges.CREATE_STANDUP, Privileges.GET_ALL_STANDUPS],
  dev: [Privileges.CREATE_STANDUP, Privileges.GET_ALL_STANDUPS],
  PO: [Privileges.GET_ALL_STANDUPS],
  cypress: [
    Privileges.CREATE_STANDUP,
    Privileges.GET_ALL_STANDUPS,
    Privileges.SEED,
  ],
} as Profiles;

export { privileges, Privileges, AuthorizationStatus };
