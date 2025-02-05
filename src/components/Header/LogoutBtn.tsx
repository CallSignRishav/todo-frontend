"use client";

import userLogout from "@/hooks/auth/userLogout";
import { LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import { toast } from "react-toastify";
import { Button } from "../ui/button";

type LogoutBtnPropsType = {
  children: ReactNode;
};

const LogoutBtn = ({ children }: LogoutBtnPropsType) => {
  const { push } = useRouter();

  const pathname = usePathname();

  const handleLogout = async () => {
    const { message, success } = await userLogout();

    if (!success) {
      toast.error(message);
    }
    if (success) {
      toast.success(message);

      push("/login");
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
