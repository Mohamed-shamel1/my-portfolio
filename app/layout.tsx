import type { Metadata } from "next";
import "./globals.css";
import ScrollUp from "@/components/ScrollUp";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const cairo = localFont({
  src: "./fonts/Cairo-Bold.woff2",
  variable: "--cairo",
});

export const metadata: Metadata = {
  title: "Mohammed Shamel's Portfolio",
  description: "a portfolio website for Mohammed Shamel",
  icons: ["favicon.ico"],
  keywords: [
    "portfolio",
    "web developer",
    "Mohammed Shamel",
    "Mohammed Shamel's Portfolio",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "an agilest, Front-End Developer with experience in designing and developing scalable websites and dashboards to support the digital growth of leading brands in Egypt, Turkey, and currently Saudi Arabia. Skilled in creating dynamic, responsive user interfaces with a focus on performance optimization and user-centered designs that enhance engagement and achieve business goals.",
    "Full-Stack Developer",
    "Agile Developer",
    "Backend Devoloper"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <Analytics />
      <body className={` ${cairo.variable} antialiased`}>
        <ScrollUp />
        {children}
      </body>
    </html>
  );
}
