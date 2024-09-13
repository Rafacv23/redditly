import { create } from "zustand"
import { persist } from "zustand/middleware"

interface Subreddit {
  id: string
  title: string
  url: string
}

export interface Post {
  id: string
  title: string
  subreddit: string
  url: string
}

interface RedditStore {
  favSubreddits: Subreddit[]
  favPosts: Post[]
  recentSubreddits: Subreddit[]
  addFavSubreddit: (subreddit: Subreddit) => void
  addRecentSubreddit: (subreddit: Subreddit) => void
  addFavPost: (post: Post) => void
  reset: () => void
}

export const useRedditStore = create<RedditStore>()(
  persist(
    (set) => ({
      favSubreddits: [],
      favPosts: [],
      recentSubreddits: [],
      addFavSubreddit: async (subreddit) => {
        set((state) => ({
          ...state,
          favSubreddits: [...state.favSubreddits, subreddit],
        }))
      },
      addRecentSubreddit: async (subreddit) => {
        set((state) => {
          const updatedRecentSubreddits = [subreddit, ...state.recentSubreddits]
          // Keep only the 5 most recent subreddits
          if (updatedRecentSubreddits.length > 5) {
            updatedRecentSubreddits.pop()
          }
          return {
            ...state,
            recentSubreddits: updatedRecentSubreddits,
          }
        })
      },
      addFavPost: async (post) => {
        set((state) => ({
          ...state,
          favPosts: [...state.favPosts, post],
        }))
      },
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
