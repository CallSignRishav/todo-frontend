import kyClient from "@/lib/ky/kyClient";
import { TodoInfoType } from "@/lib/types";
import { HTTPError } from "ky";

const addTodoHook = async (fData: TodoInfoType) => {
  try {
    await kyClient.post("items/todo_main", {
      next: { tags: ["addTodoHook"] },

      json: fData,
    });

    return {
      success: true,
      message: "Todo Added Successfully",
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

export default addTodoHook;
