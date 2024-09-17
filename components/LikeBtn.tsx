"use client"

import { useRedditStore } from "@/store/store"
import { PostData } from "@/components/Post"
import { Heart, HeartOff } from "lucide-react"

export default function LikeBtn({ post }: { post: PostData }) {
  const addFavPost = useRedditStore((state) => state.addFavPost)
  const favPosts = useRedditStore((state) => state.favPosts)

  const handleAddFavPost = async (post: PostData) => {
    const processedPost = {
      id: post.id,
      title: post.title,
      url: post.permalink,
      subreddit: post.subreddit,
    }
    addFavPost(processedPost)
  }
  return (
    <button className="btn" onClick={() => handleAddFavPost(post)}>
      {favPosts.some((favPost) => favPost.id === post.id) ? (
        <div className="tooltip tooltip-bottom" data-tip="Dislike">
          <HeartOff className="hover:text-primary transition-colors" />
        </div>
      ) : (
        <div className="tooltip tooltip-bottom" data-tip="Like">
          <Heart className="hover:text-primary transition-colors" />
        </div>
      )}
    </button>
  )
}
