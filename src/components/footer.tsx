import { Typography } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

const YEAR = new Date().getFullYear();
const LINKS = [
  {
    textId: "aboutUs",
    href: "/about",
  },
  {
    textId: "contactUs",
    href: "/contact",
  },
];

export default function Footer() {
  const t = useTranslations("common");

  return (
    <footer
      className="flex flex-row w-full md:justify-between justify-center items-center py-4 px-8 border-t gap-x-4
        border-primary"
    >
      <Typography color="primary">&copy; {YEAR} Grzegorz Bączek</Typography>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {LINKS.map(({ textId, href }) => (
          <li key={textId}>
            <Link href={href}>
              <Typography color="primary" className="hover:-translate-y-0.5">
                {t(textId)}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
