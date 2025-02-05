"use server";

import { cookies } from "next/headers";

export const clearCookieAction = async () => {
  (await cookies()).delete("directus_session_token");
};
