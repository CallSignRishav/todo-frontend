import kyClient from "@/lib/ky/kyClient";
import { ProfileUpdateDataType } from "@/lib/types";
import { HTTPError } from "ky";

const updateUserProfile = async (fData: ProfileUpdateDataType) => {
  try {
    await kyClient.patch("users/me", {
      json: fData,
      next: { tags: ["updateUserProfile"] },
    });

    return {
      success: true,
      message: "Profile updated successfully",
    };
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

export default updateUserProfile;
