import type { Metadata } from "next";
import { Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});
const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FETCHCLICKS",
  description: "Not A Witty Title isn't it?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebas.variable} ${oswald.variable}`}>
      <body className="">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
