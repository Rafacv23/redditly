"use client"

import { useRedditStore } from "@/store/store"
import { useParams } from "next/navigation"

export default function DrawerContent() {
  const favPosts = useRedditStore((state) => state.favPosts)
  const params = useParams<{ subreddit: string }>()

  return (
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {params.subreddit}
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Recently visited
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Fav Subreddits</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Fav Posts</div>
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
