"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const clearCookieAction = async () => {
  (await cookies()).delete("directus_session_token");
};

export const loginAction = async () => {
  revalidateTag("currentUser");

  redirect("/");
};

export const logoutAction = async () => {
  redirect("/login");
};

export const profileUpdateAction = async () => {
  revalidateTag("currentUser");
};

export const todoUpdateCheckAction = async () => {
  revalidateTag("getAllTodo");

  revalidatePath("/");
};
