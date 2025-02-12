import ProfileUpdateForm from "@/components/ProfileUpdateForm";
import getCurrentUser from "@/hooks/getCurrentUser";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Profile | Todo Fullstack",
  };
};

const page = async () => {
  const { data } = await getCurrentUser();

  return (
    <>
      <div className="grid h-dvh place-items-center">
        <ProfileUpdateForm profile={data} />
      </div>
    </>
  );
};

export default page;
