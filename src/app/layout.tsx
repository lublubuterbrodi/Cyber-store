import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/widgets/header/Header";
import SubNav from "@/widgets/header/SubNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyber Store",
  description: "E-commerce tech store",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SubNav />
        {children}
      </body>
    </html>
  );
}
