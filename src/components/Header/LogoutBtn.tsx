"use client";

import { logoutAction } from "@/hooks/actions";
import userLogout from "@/hooks/auth/userLogout";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { toast } from "react-toastify";
import { Button } from "../ui/button";

type LogoutBtnPropsType = {
  children: ReactNode;
};

const LogoutBtn = ({ children }: LogoutBtnPropsType) => {
  const pathname = usePathname();

  const handleLogout = async () => {
    const { message, success } = await userLogout();

    if (!success) {
      toast.error(message);
    }
    if (success) {
      toast.success(message);

      await logoutAction();
    }
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
