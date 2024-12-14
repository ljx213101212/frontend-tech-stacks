import { NextResponse } from "next/server";

export function middleware(request: any) {
  const response = NextResponse.next();

  if (request.nextUrl.pathname === "/caching/user-profile") {
    response.headers.set(
      "Cache-Control",
      "public, max-age=3688, must-revalidate"
    );
  }

  return response;
}

export const config = {
  matcher: "/caching/user-profile",
};
