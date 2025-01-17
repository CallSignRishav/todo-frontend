import { z } from "zod";
import { loginSchema, registerSchema, todoSchema } from "./schemas";

export type RegisterDataType = z.infer<typeof registerSchema>;

export type LoginDataType = z.infer<typeof loginSchema>;

export type TodoInfoType = z.infer<typeof todoSchema>;
