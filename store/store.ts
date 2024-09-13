import { create } from "zustand"

interface RedditStore {
  favSubreddits: []
  favPosts: []
  recentSubreddits: []
  reset: () => void
}

export const useRedditStore = create<RedditStore>((set) => ({
  favSubreddits: [],
  favPosts: [],
  recentSubreddits: [],
  reset: () =>
    set(() => ({
      favSubreddits: [],
      favPosts: [],
      recentSubreddits: [],
    })),
}))
