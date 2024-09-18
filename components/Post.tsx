import PostHeader from "@/components/post/PostHeader"
import PostBody from "@/components/post/PostBody"
import PostFooter from "@/components/post/PostFooter"

export interface PostData {
  approved_at_utc: number | null
  subreddit: string
  selftext: string
  author_fullname: string
  title: string
  ups: number
  upvote_ratio: number
  author: string
  num_comments: number
  created_utc: number
  link_flair_richtext: LinkFlairRichtext[]
  link_flair_text: string
  link_flair_background_color: string
  subreddit_name_prefixed: string
  permalink: string
  url: string
  stickied: boolean
  is_self: boolean
  id: string
  author_premium: boolean
  is_video: boolean
  over_18: boolean
  spoiler: boolean
  secure_media_embed: {
    content: string
  }
  media: {
    reddit_video: {
      fallback_url: string
    }
  }
}

export interface LinkFlairRichtext {
  e: string
  t: string
  a?: string
  u?: string
}

export default async function Post({ post }: { post: PostData }) {
  const link = `https://www.reddit.com${post.permalink}`

  return (
    <div className="card bg-base-100 shadow-xl w-full lg-auto">
      <div className="card-body">
        <PostHeader post={post} link={link} />
        <PostBody post={post} />
        <PostFooter post={post} link={link} />
      </div>
    </div>
  )
}
