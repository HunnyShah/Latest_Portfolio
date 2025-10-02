"use client";

import React, { useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { type Locale, locales } from "@/i18n/config";

const LanguageSwitcher = () => {
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLanguage = () => {
    const newLocale: Locale = currentLocale === "en" ? "fr" : "en";

    // Remove any locale prefix from the pathname
    let pathWithoutLocale = pathname;

    // Remove all possible locale prefixes
    for (const locale of locales) {
      const prefix = `/${locale}`;
      if (pathWithoutLocale.startsWith(prefix)) {
        pathWithoutLocale = pathWithoutLocale.slice(prefix.length) || "/";
        break;
      }
    }

    // Ensure path starts with /
    if (!pathWithoutLocale.startsWith("/")) {
      pathWithoutLocale = "/" + pathWithoutLocale;
    }

    // Construct new path based on target locale
    const newPath =
      newLocale === "en"
        ? pathWithoutLocale
        : `/fr${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;

    // Save locale preference to cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${
      60 * 60 * 24 * 365
    }; SameSite=Lax`;

    // Use startTransition for smooth, non-blocking navigation
    startTransition(() => {
      router.push(newPath);
      router.refresh();
    });
  };

  return (
    <button
      onClick={switchLanguage}
      disabled={isPending}
      className={`flex items-center justify-center w-12 h-9 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 border border-slate-200 dark:border-slate-700 ${
        isPending ? "opacity-50 cursor-wait" : ""
      }`}
      aria-label={`Switch to ${currentLocale === "en" ? "French" : "English"}`}
      title={`Switch to ${currentLocale === "en" ? "French" : "English"}`}
    >
      <span className="font-semibold">
        {isPending ? "..." : currentLocale.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
