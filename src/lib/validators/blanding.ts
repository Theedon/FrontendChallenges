import { z } from "zod";

const emailValidator = z.object({
  email: z
    .string({ required_error: "Enter email address" })
    .email("Valid email required"),
});

export { emailValidator };
