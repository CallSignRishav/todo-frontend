"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

type LogoutBtnPropsType = {
  children: ReactNode;
};

const LogoutBtn = ({ children }: LogoutBtnPropsType) => {
  const { push } = useRouter();

  const pathname = usePathname();

  const handleLogout = () => {
    push("/login");
  };

  if (pathname === "/" || pathname === "/profile") {
    return (
      <>
        {children}

        <Button
          className="flex items-center"
          variant="destructive"
          onClick={handleLogout}
        >
          <LogOut />
          Log Out
        </Button>
      </>
    );
  } else {
    return <></>;
  }
};

export default LogoutBtn;
