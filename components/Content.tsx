import Post, { PostData } from "@/components/Post"

export interface RedditPost {
  data: PostData
}

export default async function Content({ subreddit }: { subreddit: string }) {
  //const subreddit = `f1manager`

  const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`)

  const data = await res.json()

  const redditPosts: RedditPost[] = data.data.children

  return (
    <div className="flex-1 lg:p-4 w-full">
      <ul className="space-y-4">
        {redditPosts.map((post) => (
          <Post key={post.data.id} post={post.data} />
        ))}
      </ul>
    </div>
  )
}
