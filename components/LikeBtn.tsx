"use client"

import { useRedditStore } from "@/store/store"
import { PostData } from "@/components/Post"

export default function LikeBtn({ post }: { post: PostData }) {
  const addFavPost = useRedditStore((state) => state.addFavPost)

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
      Fav
    </button>
  )
}
