import { z } from "zod";

export const registerSchema = z.object({
  first_name: z
    .string()
    .min(3, { message: "First name must be at least 3 characters long" }),

  email: z.string().email({ message: "Enter a valid email" }),

  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long" }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),

  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long" }),
});
