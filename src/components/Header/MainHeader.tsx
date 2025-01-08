import LogoutBtn from "./LogoutBtn";
import ToggleTheme from "./ToggleTheme";

const MainHeader = () => {
  return (
    <>
      <header className="fixed w-full border-b border-b-foreground/10 p-4 shadow-sm backdrop-blur-lg">
        <div className="mx-auto flex max-w-screen-lg items-center justify-between">
          <div className="">Brand</div>

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
