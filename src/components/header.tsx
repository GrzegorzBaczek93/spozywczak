"use client";

import { ChevronDownIcon } from "@/src/icons/chevron-down";
import { HomeIcon } from "@/src/icons/home";
import { MoonIcon } from "@/src/icons/moon";
import { SunIcon } from "@/src/icons/sun";
import { useTheme } from "@/src/theme/theme-provider";
import { Button, IconButton, Menu, Typography } from "@material-tailwind/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header() {
  const t = useTranslations("common");
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="flex flex-row w-full justify-between items-center px-16 py-4">
      <Link href="/">
        <IconButton variant="solid" className="bg-transparent">
          <HomeIcon />
        </IconButton>
      </Link>
      <div className="flex flex-row gap-x-8">
        <IconButton variant="solid" className="bg-transparent border-transparent" onClick={toggleTheme}>
          {theme === "dark" ? SunIcon() : MoonIcon()}
        </IconButton>
        <Menu>
          <Menu.Trigger as={Button} size="sm" variant="ghost" className="flex items-center gap-1">
            <Typography>{t("language")}</Typography>
            <ChevronDownIcon />
          </Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Polski</Menu.Item>
            <Menu.Item>English</Menu.Item>
          </Menu.Content>
        </Menu>
        <Link href="login">
          <Button size="sm">
            <Typography>{t("signIn")}</Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
}
