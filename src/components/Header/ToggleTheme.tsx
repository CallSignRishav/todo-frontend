"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <Button
        variant={"link"}
        onClick={handleTheme}
        className="flex items-center"
      >
        <Sun className="-rotate-90 scale-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-125" />

        <MoonStar className="absolute rotate-0 scale-125 transition-all duration-300 ease-in-out dark:rotate-90 dark:scale-0" />
      </Button>
    </>
  );
};

export default ToggleTheme;
