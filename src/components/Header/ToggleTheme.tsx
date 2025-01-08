"use client";

import { MoonStar, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

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
        variant={"ghost"}
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
