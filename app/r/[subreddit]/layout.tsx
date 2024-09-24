import Header from "@/components/Header"
import { SITE_NAME, SITE_URL } from "@/site/config"
import { Metadata } from "next"

type Props = {
  params: { subreddit: string }
  children: React.ReactNode
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
      site: `@rafacanosa`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default function SubredditLayout({ children, params }: Props) {
  const subreddit = params.subreddit

  return (
    <>
      <Header subreddit={subreddit} />
      <div className="flex flex-1">{children}</div>
    </>
  )
}
