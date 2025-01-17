import MainHeader from "@/components/Header/MainHeader";
import ThemeProvider from "@/components/ThemeProvider";
import { ReactNode } from "react";
import "./globals.css";

type RootLayoutPropsType = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutPropsType) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          themes={["light", "dark"]}
        >
          <MainHeader />

          <main className="mx-auto max-w-screen-lg px-4 md:pt-0">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
