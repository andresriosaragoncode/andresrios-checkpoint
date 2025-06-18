const env = {
  databasePassword: process.env.DATABASE_PASSWORD,
  databaseName: process.env.DATABASE_NAME,
  authSecret: process.env.NEXTAUTH_SECRET,
  environment: process.env.ENVIRONMENT,
  noAuth: process.env.NO_AUTH,
  mockUserProfile: process.env.MOCK_USER_PROFILE,
} as any;

export { env };
