import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Keval Rabadiya - Software Engineer",
  description:
    "Backend Engineer specializing in Node.js, AWS, and scalable web applications. Currently building innovative solutions at 7Span Internet Private Limited.",
  keywords: "Keval Rabadiya, Software Engineer, Backend Developer, Node.js, AWS, TypeScript, MySQL, Prisma",
  authors: [{ name: "Keval Rabadiya" }],
  openGraph: {
    title: "Keval Rabadiya - Software Engineer",
    description: "Backend Engineer specializing in Node.js, AWS, and scalable web applications.",
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
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
