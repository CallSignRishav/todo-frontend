import Link from "next/link";
import LogoutBtn from "./LogoutBtn";
import ProfileLink from "./ProfileLink";
import ToggleTheme from "./ToggleTheme";

const MainHeader = async () => {
  return (
    <>
      <header className="fixed w-full border-b border-b-foreground/10 shadow-sm backdrop-blur-lg">
        <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-between gap-4 p-4 md:flex-row">
          <Link
            href={"/"}
            className="bg-gradient-to-tr from-blue-500 to-pink-500 bg-clip-text text-2xl font-bold tracking-[.5rem] text-transparent"
          >
            TODO
          </Link>

          <div className="flex items-center gap-8">
            <LogoutBtn>
              <ProfileLink />
            </LogoutBtn>

            <ToggleTheme />
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
