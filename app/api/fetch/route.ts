// app/api/fetch/route.ts

import { NextResponse } from "next/server"
import { createRedditClient, SortingMethod } from "reddit-explorer"

export const revalidate = 60

export async function GET(request: Request) {
  // Check for environment variables
  if (
    !process.env.NEXT_PUBLIC_REDDIT_PUBLIC ||
    !process.env.NEXT_PUBLIC_REDDIT_SECRET
  ) {
    return NextResponse.json(
      { error: "Reddit client credentials are not configured." },
      { status: 500 }
    )
  }

  console.log(process.env.NEXT_PUBLIC_REDDIT_PUBLIC)

  const reddit = createRedditClient({
    clientId: process.env.NEXT_PUBLIC_REDDIT_PUBLIC,
    secret: process.env.NEXT_PUBLIC_REDDIT_SECRET,
  })

  const { searchParams } = new URL(request.url)
  const subreddit = searchParams.get("subreddit")

  if (!subreddit) {
    return NextResponse.json(
      { error: "Subreddit is required" },
      { status: 400 }
    )
  }

  try {
    const data = await reddit.getSubreddit({
      name: subreddit,
      sortMethod: SortingMethod.Hot,
    })

    return NextResponse.json(data.data.children, { status: 200 })
  } catch (error) {
    console.error("Error fetching data:", error) // Log the error for debugging
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 })
  }
}
