"use client";

import { MoonStar, Sun } from "lucide-react";
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
      <button
        onClick={handleTheme}
        className="flex h-10 items-center"
      >
        <Sun
          size={24}
          className="-rotate-90 scale-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100"
        />

        <MoonStar
          size={24}
          className="absolute rotate-0 scale-100 transition-all duration-300 ease-in-out dark:rotate-90 dark:scale-0"
        />
      </button>
    </>
  );
};

export default ToggleTheme;
