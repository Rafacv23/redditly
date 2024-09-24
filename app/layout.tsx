import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import { SITE_DESCRIPTION, SITE_URL } from "@/site/config"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Redditly | Your Open Source Reddit Client for Seamless Exploration",
  description: `${SITE_DESCRIPTION} Discover and explore your favorite subreddits effortlessly with Redditly.`,
  keywords:
    "Reddit, Reddit client, open source, subreddits, community, discussions, posts",
  openGraph: {
    title: "Redditly | Open Source Reddit Client",
    description: `${SITE_DESCRIPTION} Discover and explore your favorite subreddits effortlessly with Redditly.`,
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/favicon.ico`,
        alt: "Redditly - Explore Subreddits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Redditly | Open Source Reddit Client",
    description: `${SITE_DESCRIPTION} Discover and explore your favorite subreddits effortlessly with Redditly.`,
    site: "@rafacanosa",
  },
  robots: {
    index: true,
    follow: true,
  },
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
