"use client"

import { useRedditStore } from "@/store/store"
import { Heart, RefreshCcw } from "lucide-react"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function DrawerContent() {
  const favPosts = useRedditStore((state) => state.favPosts)
  const favSubreddits = useRedditStore((state) => state.favSubreddits)
  const addFavSubreddit = useRedditStore((state) => state.addFavSubreddit)
  const params = useParams<{ subreddit: string }>()
  const subreddit = params.subreddit
  const [activeAccordion, setActiveAccordion] = useState<string | null>(
    "recently-visited"
  )

  const handleReload = () => {
    window.location.reload()
  }

  const handleFavSubreddit = () => {
    addFavSubreddit(subreddit)
  }

  const handleAccordionToggle = (accordionId: string) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId)
  }

  return (
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <div className="flex justify-between">
        <h3 className="badge badge-outline badge-primary gap-2">{subreddit}</h3>
        <div className="space-x-4 flex mr-2">
          <button onClick={handleFavSubreddit}>
            <Heart className="hover:text-primary transition-colors" />
          </button>
          <button onClick={handleReload}>
            <RefreshCcw className="hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input
          type="radio"
          name="my-accordion-3"
          defaultChecked
          id="recently-visited"
          onChange={() => handleAccordionToggle("recently-visited")}
        />
        <div className="collapse-title text-lg font-medium">
          <label
            htmlFor="recently-visited"
            className={` text-lg font-medium ${
              activeAccordion === "recently-visited" ? "text-primary" : ""
            }`}
          >
            Recently visited
          </label>
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input
          type="radio"
          name="my-accordion-3"
          id="fav-subreddits"
          onChange={() => handleAccordionToggle("fav-subreddits")}
        />
        <div className="collapse-title text-lg font-medium">
          <label
            htmlFor="fav-subreddits"
            className={`text-lg font-medium ${
              activeAccordion === "fav-subreddits" ? "text-primary" : ""
            }`}
          >
            Fav Subreddits
          </label>
        </div>
        <div className="collapse-content">
          <ul>
            {favSubreddits.map((subreddit) => (
              <li key={subreddit}>
                <a href={`/r/${subreddit}`}>{subreddit}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input
          type="radio"
          name="my-accordion-3"
          id="fav-posts"
          onChange={() => handleAccordionToggle("fav-posts")}
        />
        <div className="collapse-title text-lg font-medium">
          <label
            htmlFor="fav-posts"
            className={` text-lg font-medium ${
              activeAccordion === "fav-posts" ? "text-primary" : ""
            }`}
          >
            Fav Posts
          </label>
        </div>
        <div className="collapse-content">
          <ul>
            {favPosts.map((post) => (
              <li key={post.id}>
                <a
                  href={`https://reddit.com${post.url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ul>
  )
}
