import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale, type Locale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  // This can either be defined statically at the top-level or based
  // on a user setting. However, it should be set on a per-request
  // basis and correspond to a supported locale.
  let locale = await requestLocale;

  // Ensure that a supported locale is used
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
