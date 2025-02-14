import kyServer from "@/lib/ky/kyServer";
import { DefaultResponseType, TodoDataType } from "@/lib/types";
import { HTTPError } from "ky";
import { cookies } from "next/headers";

const getAllTodo = async () => {
  const currentUserToken = (await cookies()).get("directus_session_token")
    ?.value as string;

  try {
    const { data } = await kyServer
      .get("items/todo_main", {
        headers: {
          Authorization: `Bearer ${currentUserToken}`,
        },
        next: { tags: ["getAllTodo"] },
      })
      .json<DefaultResponseType<TodoDataType[]>>();

    return {
      isError: false,
      data: data,
      error: null,
    };
  } catch (error: any) {
    const httpError = error as HTTPError;

    const errorJson = await httpError.response.json<any>();

    return {
      isError: true,
      data: null,
      error: errorJson.errors[0].message,
    };
  }
};

export default getAllTodo;
