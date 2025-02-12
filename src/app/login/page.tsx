import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Login | Todo Fullstack",
  };
};

const page = () => {
  return (
    <>
      <section className="grid h-dvh place-items-center">
        <LoginForm />
      </section>
    </>
  );
};

export default page;
