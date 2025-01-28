import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18nConfig } from "./app/config/i18n.config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locale =
    request.cookies.get("NEXT_LOCALE")?.value || i18nConfig.defaultLocale;

  // Check if the pathname is missing the locale (for example, "/about" should be "/en/about" or "/ar/about")
  const pathnameIsMissingLocale = i18nConfig.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Redirect to the default language if no locale is found
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // If it's already localized, allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
