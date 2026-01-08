import type { Metadata } from "next";
import { Inter, Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import ProgressRing from "@/components/ProgressRing";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhutan Valley Circuit | Bhutan Silverpine Tours",
  description: "8 Days | 7 Nights motorcycle expedition through the mystical valleys of Bhutan. Royal Enfield Himalayan 450. Premium experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${syne.variable} ${space.variable} antialiased`}
      >
        <Preloader />
        <CustomCursor />
        <ProgressRing />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
