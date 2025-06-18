import { z } from "zod";

const envSchema = z.object({
  ENVIRONMENT: z.union([z.literal("development"), z.literal("production")]),
  DATABASE_PASSWORD: z.string().min(1),
  DATABASE_NAME: z.string().min(1),
});

export { envSchema };
