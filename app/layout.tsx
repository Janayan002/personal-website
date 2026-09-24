import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import RippleNoise from "./components/RippleNoise";
import Sidebar from "./components/Sidebar";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Jana Yan", template: "%s — Jana Yan" },
  description: "Jana Yan — installation, painting and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${garamond.variable} antialiased`}>
        <RippleNoise />
        <Sidebar />
        <main className="content">{children}</main>
      </body>
    </html>
  );
}
