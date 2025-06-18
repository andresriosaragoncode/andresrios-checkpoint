import { z } from "zod";

const mySchema = z
  .object({
    username: z.string().min(3, "Name must be at least 3 characters"),
    password: z.string().min(1, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    profile: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export { mySchema };
export type MySchemaType = z.infer<typeof mySchema>;
