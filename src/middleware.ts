import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import env from "./lib/env";

// This function can be marked `async` if using `await` inside
export const middleware = async (request: NextRequest) => {
  const secret = new TextEncoder().encode(env.JWT_SECRET);

  const cookiestoken = request.cookies.get("directus_session_token")?.value;

  if (cookiestoken === "" || cookiestoken === undefined) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    await jwtVerify(cookiestoken, secret);

    return NextResponse.next();
  } catch (error) {
    const checkRes = NextResponse.redirect(new URL("/login", request.url));

    checkRes.cookies.delete("directus_session_token");

    console.log(error);

    return checkRes;
  }
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile"],
};
