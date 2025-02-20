import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import env from "./lib/env";

// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextRequest) => {
  const secret = new TextEncoder().encode(env.JWT_SECRET);

  const cookiestoken = request.cookies.get("directus_session_token")?.value;

  const publicRoutes = ["/login", "/register"];

  try {
    if (cookiestoken) {
      await jwtVerify(cookiestoken, secret);

      // Redirect authenticated users away from public routes
      if (publicRoutes.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/", request.url));
      }

      return NextResponse.next();
    } else {
      // Redirect unauthenticated users to login if they try to access protected routes
      if (!publicRoutes.includes(request.nextUrl.pathname)) {
        return NextResponse.redirect(new URL("/login", request.url));
      }

      return NextResponse.next();
    }
  } catch (error) {
    const checkRes = NextResponse.redirect(new URL("/login", request.url));

    checkRes.cookies.delete("directus_session_token");

    console.log(error);

    return checkRes;
  }

  // if (cookiestoken === "" || cookiestoken === undefined) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // try {
  //   await jwtVerify(cookiestoken, secret);

  //   return NextResponse.next();
  // } catch (error) {
  //   const checkRes = NextResponse.redirect(new URL("/login", request.url));

  //   checkRes.cookies.delete("directus_session_token");

  //   console.log(error);

  //   return checkRes;
  // }
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/login", "/register"],
};
