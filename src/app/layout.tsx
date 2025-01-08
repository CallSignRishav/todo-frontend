import { ReactNode } from "react";
import "./globals.css";

type RootLayoutPropsType = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutPropsType) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
