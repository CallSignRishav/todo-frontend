import ToggleTheme from "./ToggleTheme";

const MainHeader = () => {
  return (
    <>
      <header className="fixed w-full border-b border-b-foreground/10 shadow-sm backdrop-blur-lg">
        <div className="mx-auto flex max-w-screen-lg items-center justify-between p-4">
          <div className="">Brand</div>

          <div className="flex items-center gap-4">
            <ToggleTheme />

            <div className="">Menu</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
