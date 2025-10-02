import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Use 'always' to consistently prefix all routes with locale
  // This makes navigation predictable and eliminates confusion
  localePrefix: "as-needed",

  // Detect locale from various sources
  localeDetection: true,

  // Ensure alternates are properly set for SEO
  alternateLinks: true,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
