import TodoSingle from "./TodoSingle";

const TodoList = () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <TodoSingle />

        <TodoSingle />

        <TodoSingle />

        <TodoSingle />
      </section>
    </>
  );
};

export default TodoList;
