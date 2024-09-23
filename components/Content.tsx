import Post, { PostData } from "@/components/Post"
import UpBtn from "@/components/UpBtn"
import { fetchSubreddit } from "@/lib/utils"
import { notFound } from "next/navigation"

export interface RedditPost {
  data: PostData
}

export default async function Content({ subreddit }: { subreddit: string }) {
  //const subreddit = `f1manager`
  let redditPosts: RedditPost[] = []

  const data = await fetchSubreddit(subreddit)

  if (!data || (Array.isArray(data) && data.length === 0)) {
    notFound()
  }

  // Check if data is an array
  if (Array.isArray(data)) {
    redditPosts = data
  } else {
    console.error("Unexpected data format:", data)
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
