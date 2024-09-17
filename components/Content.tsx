import Post, { PostData } from "@/components/Post"
import { notFound } from "next/navigation"

export interface RedditPost {
  data: PostData
}

export default async function Content({ subreddit }: { subreddit: string }) {
  //const subreddit = `f1manager`
  let redditPosts: RedditPost[] = []

  try {
    const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`)
    if (!res.ok) {
      notFound()
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    redditPosts = data.data.children
  } catch (error) {
    console.error("Error fetching data:", error)
  }

  return (
    <div className="flex-1 lg:p-4 w-full">
      <ul className="space-y-4">
        {redditPosts?.map((post) => (
          <Post key={post.data.id} post={post.data} />
        ))}
      </ul>
    </div>
  )
}
