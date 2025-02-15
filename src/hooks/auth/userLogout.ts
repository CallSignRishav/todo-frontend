import kyClient from "@/lib/ky/kyClient";

const userLogout = async () => {
  try {
    await kyClient.post("auth/logout", {
      next: { tags: ["authLogout"] },
      json: {
        refresh_token: "",
        mode: "session",
      },
    });

    return {
      success: true,
      message: "Logout Successful!",
    };
    // eslint-disable-next-line
  } catch (error: any) {
    if (error.name === "HTTPError") {
      return {
        success: true,
        message: "Already Logout!",
      };
    } else {
      return {
        success: false,
        message: "Network Error",
      };
    }
  }
};

export default userLogout;
