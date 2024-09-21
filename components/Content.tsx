import Post, { PostData } from "@/components/Post"
import UpBtn from "@/components/UpBtn"
import { SITE_URL } from "@/site/config"

export interface RedditPost {
  data: PostData
}

export default async function Content({ subreddit }: { subreddit: string }) {
  //const subreddit = `f1manager`
  let redditPosts: RedditPost[] = []

  try {
    const response = await fetch(
      `${SITE_URL}/api/fetch?subreddit=${subreddit}`,
      {
        headers: {
          Accept: "application/json",
          method: "GET",
          "User-Agent": "RedditlyApp/1.0 (https://redditly.vercel.app)",
        },
      }
    )

    if (!response.ok) {
      //notFound()
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
