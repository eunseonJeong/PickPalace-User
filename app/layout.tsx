import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import {Footer} from "@/app/components/footer";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PickPalace",
  description: "Welcome to PickPalace",
};

export default function RootLayout({
  children,
  }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={font.className}>{children}
      <Footer/>
      </body>
      </html>
  );
}