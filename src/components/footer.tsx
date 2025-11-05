import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex flex-row w-full justify-center items-center py-4 border-t gap-x-4">
      <Typography>&copy; {YEAR} Grzegorz Bączek</Typography>
    </footer>
  );
}
