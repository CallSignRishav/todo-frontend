import RegisterForm from "@/components/RegisterForm";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Register | Todo Fullstack",
  };
};

const page = () => {
  return (
    <>
      <section className="grid h-dvh place-items-center">
        <RegisterForm />
      </section>
    </>
  );
};

export default page;
