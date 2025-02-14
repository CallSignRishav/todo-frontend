import getAllTodo from "@/hooks/todo/getAllTodo";
import TodoSingle from "./TodoSingle";

const TodoList = async () => {
  const { isError, data, error } = await getAllTodo();

  if (isError) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        {data?.map((tInfo) => {
          return (
            <TodoSingle
              key={tInfo.id}
              details={tInfo}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
