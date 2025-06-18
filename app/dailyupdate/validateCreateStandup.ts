import { z } from "zod";

const standUpSchema = z.object({
  today: z.string().min(3, "Name must be at least 3 characters"),
});

export { standUpSchema };
export type StandUpSchemaType = z.infer<typeof standUpSchema>;
