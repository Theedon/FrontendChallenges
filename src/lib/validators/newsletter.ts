import { z } from "zod";

const subscribeSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Valid email required"),
});

const emailSchema = z
  .string({ required_error: "Email is required" })
  .email("Valid email required");

export { subscribeSchema, emailSchema };
