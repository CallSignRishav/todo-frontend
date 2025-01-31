import kyClient from "@/lib/ky/kyClient";
import {
  AuthEmailType,
  DefaultResponseType,
  RegisterDataType,
} from "@/lib/types";
import { HTTPError } from "ky";

const userRegister = async (fData: RegisterDataType) => {
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
      await kyClient.post("users", {
        next: { tags: ["createUser"] },
        json: {
          first_name: fData.first_name,
          email: fData.email,
          password: fData.password,
          role: "fb0ad684-6818-4ed9-9b4c-ff15692a4ca9",
        },
      });

      return {
        success: true,
        message: "Successful",
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
