import getCurrentUser from "@/hooks/getCurrentUser";
import Link from "next/link";

const ProfileLink = async () => {
  const { data, isError } = await getCurrentUser();

  if (isError) {
    return <>🚨</>;
  }

  return (
    <>
      <Link
        href="/profile"
        className="capitalize"
      >
        {data?.first_name}
      </Link>
    </>
  );
};

export default ProfileLink;
