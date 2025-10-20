import "./globals.css";
import Footer from "@/ui/components/footer/footer";
import Header from "@/ui/components/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="flex min-h-screen flex-col items-center bg-amber-200 antialiased dark:bg-amber-900">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
