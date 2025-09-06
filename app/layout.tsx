import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/shared/header";


const manrope = Manrope({
    subsets: ['cyrillic'],
    variable: '--font-manrope',
    weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Next Pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
      <main className="min-h-screen">
          <Header />
          {children}
      </main>
      </body>
    </html>
  );
}
