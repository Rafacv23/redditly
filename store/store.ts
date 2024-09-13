import { create } from "zustand"
import { persist } from "zustand/middleware"

interface RedditStore {
  favSubreddits: []
  favPosts: []
  recentSubreddits: []
  reset: () => void
}

export const useRedditStore = create<RedditStore>()(
  persist(
    (set) => ({
      favSubreddits: [],
      favPosts: [],
      recentSubreddits: [],
      reset: () =>
        set(() => ({
          favSubreddits: [],
          favPosts: [],
          recentSubreddits: [],
        })),
    }),
    {
      name: "redditStore",
    }
  )
)
