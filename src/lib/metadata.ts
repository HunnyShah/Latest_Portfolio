import { getTranslations } from "next-intl/server";
import { type Metadata } from "next";

type PageType = "about" | "projects" | "skills" | "contact";

export async function generateMetadata(
  locale: string,
  page?: PageType
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseTitle = t("title");
  const title = page ? `${t(page)} | ${baseTitle}` : baseTitle;

  return {
    title,
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title,
      description: t("description"),
      type: "website",
      locale: locale === "fr" ? "fr_CA" : "en_CA",
    },
    alternates: {
      languages: {
        en:
          locale === "fr"
            ? `${process.env.NEXT_PUBLIC_URL || "https://hunnyshah.dev"}${
                page ? `/${page}` : ""
              }`
            : undefined,
        fr:
          locale === "en"
            ? `${process.env.NEXT_PUBLIC_URL || "https://hunnyshah.dev"}/fr${
                page ? `/${page}` : ""
              }`
            : undefined,
      },
    },
  };
}
