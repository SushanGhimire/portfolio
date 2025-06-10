import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alex Johnson - Full-Stack Developer & UI/UX Designer",
  description:
    "Portfolio of Alex Johnson, a passionate Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: "Full-Stack Developer, React, Next.js, TypeScript, UI/UX Designer, Web Development",
  authors: [{ name: "Alex Johnson" }],
  openGraph: {
    title: "Alex Johnson - Full-Stack Developer Portfolio",
    description:
      "Explore the work and experience of Alex Johnson, a skilled Full-Stack Developer with 5+ years of experience.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
