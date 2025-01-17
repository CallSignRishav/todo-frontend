import Link from "next/link";

const ProfileLink = () => {
  return (
    <>
      <Link
        href="/profile"
        className="capitalize"
      >
        admin
      </Link>
    </>
  );
};

export default ProfileLink;
