import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Susan Ghimire - Frontend Developer",
  description:
    "Passionate about creating exceptional digital experiences withmodern technologies. I specialize in React and Next.js, with a keen eye for design and user experience.",
  keywords: "Frontend Developer, React, Next.js, TypeScript, Web Development",
  authors: [{ name: "Alex Johnson" }],
  openGraph: {
    title: "Susan Ghimire - Frontend Developer",
    description:
      "Explore the work and experience of Susan Ghimire, a skilled Frontend Developer with 3+ years of experience.",
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
