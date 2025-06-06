import LeftPane from "@/components/LeftPane";
import SocialNetworks from "@/components/SocialNetworks";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Adrian Cuadrado's blog",
  description:
    "I only created this for fun and don't really plan to write many articles in it to be honest 😅",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} antialiased flex justify-between mt-[145px] mb-[145px] ml-[23px] mr-[23px] bg-background items-start`}
      >
        <LeftPane />
        {children}
        <SocialNetworks />
      </body>
    </html>
  );
}
