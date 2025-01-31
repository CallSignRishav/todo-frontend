import AddTodo from "@/components/HomeComps/AddTodo";
import TodoList from "@/components/HomeComps/TodoList";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Home | Todo Fullstack",
  };
};

const page = () => {
  return (
    <>
      <section className="pt-36 md:pt-24">
        <AddTodo />
      </section>

      <section className="py-10">
        <TodoList />
      </section>
    </>
  );
};

export default page;
