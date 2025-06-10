import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Susan GHimire - Frontend Developer",
  description:
    "Portfolio of Alex Johnson, a passionate Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: "Frontend Developer, React, Next.js, TypeScript, Web Development",
  authors: [{ name: "Alex Johnson" }],
  openGraph: {
    title: "Susan Ghimire - Frontend Developer",
    description:
      "Explore the work and experience of Susan Ghimire, a skilled Full-Stack Developer with 3+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
