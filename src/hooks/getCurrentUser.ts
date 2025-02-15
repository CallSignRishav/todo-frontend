import kyServer from "@/lib/ky/kyServer";
import { AuthUserProfileType, DefaultResponseType } from "@/lib/types";
import { HTTPError } from "ky";
import { cookies } from "next/headers";

const getCurrentUser = async () => {
  const currentUserToken = (await cookies()).get("directus_session_token")
    ?.value as string;

  try {
    const { data } = await kyServer
      .get("users/me", {
        headers: {
          Authorization: `Bearer ${currentUserToken}`,
        },
        next: { tags: ["currentUser"] },
        searchParams: {
          fields: "id,first_name,last_name,email",
        },
      })
      .json<DefaultResponseType<AuthUserProfileType>>();

    return {
      isError: false,
      data: data,
      error: null,
    };
    // eslint-disable-next-line
  } catch (error: any) {
    const httpError = error as HTTPError;

    const errorJson = await httpError.response.json<any>(); // eslint-disable-line

    return {
      isError: true,
      data: null,
      error: errorJson.errors[0].message,
    };
  }
};

export default getCurrentUser;
