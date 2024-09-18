import Link from "next/link"
import { PostData } from "../Post"
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react"
import LikeBtn from "../LikeBtn"

export default function PostFooter({
  post,
  link,
}: {
  post: PostData
  link: string
}) {
  return (
    <div className="card-actions justify-start mt-4 items-center">
      <Link
        href={link}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
        title="Comment on Reddit"
      >
        <MessageSquare />
        {post.num_comments}
      </Link>
      <Link
        href={link}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
        title="Vote on Reddit"
      >
        <ChevronUp /> {post.ups} <ChevronDown />
      </Link>
      <LikeBtn post={post} />
    </div>
  )
}
