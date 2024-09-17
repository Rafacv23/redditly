import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Post {
  id: string
  title: string
  subreddit: string
  url: string
}

interface RedditStore {
  favSubreddits: string[]
  favPosts: Post[]
  recentSubreddits: string[]
  addFavSubreddit: (subreddit: string) => void
  addRecentSubreddit: (subreddit: string) => void
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
          const updatedRecentSubreddits = [
            subreddit,
            ...state.recentSubreddits.filter((sr) => sr !== subreddit),
          ]
          // Keep only the 10 most recent subreddits
          if (updatedRecentSubreddits.length > 10) {
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
