import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react"

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
  subreddit_name_prefixed: string
  permalink: string
  url: string
  stickied: boolean
  is_self: boolean
  id: string
  author_premium: boolean
  is_video: boolean
}

export interface LinkFlairRichtext {
  e: string
  t: string
  a?: string
  u?: string
}

export default async function Post({ post }: { post: PostData }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <small>
          <a
            href={`https://www.reddit.com/user/${post.author}/`}
            title={post.author}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary hover:transition-colors"
          >
            u/{post.author}
          </a>
        </small>
        <h2 className="card-title">
          <a
            href={post.url}
            title={`${post.title}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary hover:transition-colors"
          >
            {post.title}
          </a>
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{post.selftext.substring(0, 400)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline flex items-center p-4 gap-2 justify-center">
            <MessageSquare /> {post.num_comments}
          </div>
          <div className="badge badge-outline flex items-center p-4 gap-2 justify-center">
            <ChevronUp /> {post.ups} <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  )
}
