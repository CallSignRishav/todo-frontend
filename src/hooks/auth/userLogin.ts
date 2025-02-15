import kyClient from "@/lib/ky/kyClient";
import { AuthEmailType, DefaultResponseType, LoginDataType } from "@/lib/types";
import { HTTPError } from "ky";
import { clearCookieAction } from "../actions";

const userLogin = async (flData: LoginDataType) => {
  await clearCookieAction();

  try {
    const { data } = await kyClient
      .get("users", {
        next: { tags: ["emailCheck"] },
        searchParams: {
          filter: JSON.stringify({
            email: {
              _eq: flData.email,
            },
          }),
        },
      })
      .json<DefaultResponseType<AuthEmailType[]>>();

    if (data.length === 1) {
      await kyClient.post("auth/login", {
        next: { tags: ["authLogin"] },
        json: {
          email: flData.email,
          password: flData.password,
          mode: "session",
        },
      });

      return {
        success: true,
        message: "Login Successful",
      };
    } else {
      return {
        success: false,
        message: "Email is not registered",
      };
    }
    // eslint-disable-next-line
  } catch (error: any) {
    if (error.name === "HTTPError") {
      const httpError = error as HTTPError;

      const errorJson = await httpError.response.json<any>(); // eslint-disable-line

      return {
        success: false,
        message: errorJson.errors[0].message,
      };
    } else {
      return {
        success: false,
        message: "Network Error",
      };
    }
  }
};

export default userLogin;
