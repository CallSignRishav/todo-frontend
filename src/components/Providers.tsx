"use client";

import { useTheme } from "next-themes";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

type ProvidersPropsType = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersPropsType) => {
  const { theme } = useTheme();
  return (
    <>
      <main>{children}</main>

      {/* Toast Notification  */}
      <ToastContainer
        position={"top-center"}
        autoClose={3000}
        theme={theme}
      />
    </>
  );
};

export default Providers;
