import { routing } from "@/src/i18n/routing";
import "./globals.css";
import Footer from "@/src/ui/components/footer/footer";
import Header from "@/src/ui/components/header/header";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/src/theme/theme-provider";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html>
      <body className="flex min-h-screen flex-col items-center antialiased bg-background">
        <ThemeProvider defaultTheme="light">
          <NextIntlClientProvider>
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
