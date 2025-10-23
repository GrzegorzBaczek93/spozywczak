"use client";

import { useTheme } from "@/src/theme/theme-provider";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col">
      <a>{`Current theme is ${theme}`}</a>
      <button onClick={() => setTheme("dark")}>Set Dark</button>
      <button onClick={() => setTheme("light")}>Set Light</button>
    </div>
  );
}
