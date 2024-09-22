import Header from "@/components/Header"
import { SITE_NAME, SITE_URL } from "@/site/config"
import { Metadata } from "next"

type Props = {
  params: { subreddit: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const subreddit = params.subreddit

  return {
    title: `${subreddit} | ${SITE_NAME}`,
    description: `Explore the latest discussions, posts, and insights from the ${subreddit} subreddit. Join the community and engage with fellow fans!`,
    keywords: `${subreddit}, subreddit, reddit, discussions, posts, community`,
    openGraph: {
      title: `${subreddit} | ${SITE_NAME}`,
      description: `Explore the latest discussions, posts, and insights from the ${subreddit} subreddit. Join the community and engage with fellow fans!`,
      url: `${SITE_URL}/r/${subreddit}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${subreddit} | ${SITE_NAME}`,
      description: `Explore the latest discussions, posts, and insights from the ${subreddit} subreddit. Join the community and engage with fellow fans!`,
      site: `@rafacanosa`, // Replace with your Twitter handle
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function SubredditLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className="flex flex-1">{children}</div>
    </>
  )
}
