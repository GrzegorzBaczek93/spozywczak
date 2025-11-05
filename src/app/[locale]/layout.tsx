import { routing } from "@/src/i18n/routing";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Footer from "@/src/components/footer";

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
      <NextIntlClientProvider>
        <body className="flex min-h-screen flex-col items-center antialiased">
          <main className="grow">{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
