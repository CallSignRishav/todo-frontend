import kyClient from "@/lib/ky/kyClient";
import { HTTPError } from "ky";

type TodoToggleCheckProps = {
  tId: string;
  checked: boolean;
};

const todoToggleCheck = async ({ tId, checked }: TodoToggleCheckProps) => {
  try {
    await kyClient.patch(`items/todo_main/${tId}`, {
      json: {
        read: checked,
      },
    });

    return {
      isError: false,
      error: null,
    };
  } catch (error: any) {
    const httpError = error as HTTPError;

    const errorJson = await httpError.response.json<any>();

    return {
      isError: true,
      error: errorJson.errors[0].message,
    };
  }
};

export default todoToggleCheck;
