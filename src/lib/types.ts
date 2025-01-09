import { infer, z } from "zod";
import { loginSchema, registerSchema } from "./schemas";

export type RegisterDataType = z.infer<typeof registerSchema>;

export type LoginDataType = z.infer<typeof loginSchema>;
