import LogoutBtn from "./LogoutBtn";
import ToggleTheme from "./ToggleTheme";

const MainHeader = () => {
  return (
    <>
      <header className="fixed w-full border-b border-b-foreground/10 p-4 shadow-sm backdrop-blur-lg">
        <div className="mx-auto flex max-w-screen-lg items-center justify-between">
          <div className="bg-gradient-to-tr from-blue-500 to-pink-500 bg-clip-text text-2xl font-bold tracking-[.5rem] text-transparent">
            TODO
          </div>

          <div className="flex items-center gap-8">
            <ToggleTheme />

            <LogoutBtn />
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
