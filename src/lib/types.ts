import { z } from "zod";
import {
  loginSchema,
  profileUpdateSchema,
  registerSchema,
  todoSchema,
} from "./schemas";

export type RegisterDataType = z.infer<typeof registerSchema>;

export type LoginDataType = z.infer<typeof loginSchema>;

export type TodoInfoType = z.infer<typeof todoSchema>;

export type ProfileUpdateDataType = z.infer<typeof profileUpdateSchema>;

export type DefaultResponseType<T> = {
  data: T;
};

export type AuthEmailType = {
  email: string;
};

export type AuthUserProfileType = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
};

export type TodoDataType = {
  id: string;
  todoInfo: string;
  read: boolean;
};
