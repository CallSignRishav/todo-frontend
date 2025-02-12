import kyClient from "@/lib/ky/kyClient";
import {
  AuthEmailType,
  DefaultResponseType,
  RegisterDataType,
} from "@/lib/types";
import { HTTPError } from "ky";
import { clearCookieAction } from "../action";

const userRegister = async (fData: RegisterDataType) => {
  await clearCookieAction();

  try {
    const { data } = await kyClient
      .get("users", {
        next: { tags: ["emailCheck"] },
        searchParams: {
          filter: JSON.stringify({
            email: {
              _eq: fData.email,
            },
          }),
        },
      })
      .json<DefaultResponseType<AuthEmailType[]>>();

    if (data.length === 0) {
      await kyClient.post("users/register", {
        next: { tags: ["authRegister"] },
        json: fData,
      });

      return {
        success: true,
        message: "Registered Successful!",
      };
    } else {
      return {
        success: false,
        message: "Email already exists",
      };
    }
  } catch (error: any) {
    if (error.name === "HTTPError") {
      const httpError = error as HTTPError;

      const errorJson = await httpError.response.json<any>();

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

export default userRegister;
