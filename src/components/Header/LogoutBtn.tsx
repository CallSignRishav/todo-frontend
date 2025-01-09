"use client";

import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";

const LogoutBtn = () => {
  const { push } = useRouter();

  const pathname = usePathname();

  const handleLogout = () => {
    push("/login");
  };

  if (pathname === "/") {
    return (
      <>
        <Button
          className="flex items-center"
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
