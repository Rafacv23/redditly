import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import { SITE_DESCRIPTION } from "@/site/config"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Redditly - Open Source Reddit client",
  description: SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans`}>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
