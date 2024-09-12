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
  console.log(post.title)
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <small>{post.author}</small>
        <h2 className="card-title">
          {post.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  )
}
