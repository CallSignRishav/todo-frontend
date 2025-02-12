import ProfileUpdateForm from "@/components/ProfileUpdateForm";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Profile | Todo Fullstack",
  };
};

const page = () => {
  return (
    <>
      <div className="grid h-dvh place-items-center">
        <ProfileUpdateForm />
      </div>
    </>
  );
};

export default page;
