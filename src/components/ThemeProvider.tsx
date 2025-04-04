"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ComponentProps } from "react";
import Providers from "./Providers";

type ThemeProviderPropsType = ComponentProps<typeof NextThemesProvider>;

const ThemeProvider = ({ children, ...props }: ThemeProviderPropsType) => {
  return (
    <>
      <NextThemesProvider {...props}>
        {children}

        <Providers />
      </NextThemesProvider>
    </>
  );
};

export default ThemeProvider;
