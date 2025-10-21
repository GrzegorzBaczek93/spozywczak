import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("common");
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-slate-200 py-4 text-center md:justify-between">
      <p className="block px-3 text-sm font-semibold text-slate-800">
        {t("brandName")}
      </p>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
        <li>
          <a
            href="/about"
            className="px-3 text-sm text-slate-700 hover:text-slate-500 focus:text-slate-500"
          >
            {t("aboutUs")}
          </a>
          <a
            href="/contact"
            className="px-3 text-sm text-slate-700 hover:text-slate-500 focus:text-slate-500"
          >
            {t("contactUs")}
          </a>
        </li>
      </ul>
    </footer>
  );
}
