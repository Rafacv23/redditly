import Post, { PostData } from "@/components/Post"
import { notFound } from "next/navigation"
import UpBtn from "@/components/UpBtn"

export interface RedditPost {
  data: PostData
}

export default async function Content({ subreddit }: { subreddit: string }) {
  //const subreddit = `f1manager`
  let redditPosts: RedditPost[] = []

  try {
    // Llamada a tu API interna en lugar de directamente a Reddit
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/fetch?subreddit=${subreddit}`
    )

    if (!response.ok) {
      notFound()
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    redditPosts = data
  } catch (error) {
    console.error("Error fetching data:", error)
  }

  return (
    <div className="flex-1 lg:p-4 w-full bg-base-200">
      <ul className="space-y-4">
        {redditPosts?.map((post) => (
          <Post key={post.data.id} post={post.data} />
        ))}
      </ul>
      <UpBtn />
    </div>
  )
}
