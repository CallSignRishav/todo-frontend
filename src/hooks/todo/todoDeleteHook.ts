import kyClient from "@/lib/ky/kyClient";
import { HTTPError } from "ky";

const todoDeleteHook = async (tId: string) => {
  try {
    await kyClient.delete(`items/todo_main/${tId}`, {
      next: { tags: ["deleteTodo"] },
    });
    return {
      isError: false,
      error: "Todo Deleted Successfully",
    };
    // eslint-disable-next-line
  } catch (error: any) {
    const httpError = error as HTTPError;

    const errorJson = await httpError.response.json<any>(); // eslint-disable-line

    return {
      isError: true,
      error: errorJson.errors[0].message,
    };
  }
};

export default todoDeleteHook;
