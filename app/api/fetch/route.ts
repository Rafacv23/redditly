// app/api/fetch/route.ts

import { NextResponse } from "next/server"

export const revalidate = 60

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const subreddit = searchParams.get("subreddit")

  if (!subreddit) {
    return NextResponse.json(
      { error: "Subreddit is required" },
      { status: 400 }
    )
  }

  try {
    const res = await fetch(`https://www.reddit.com/r/${subreddit}.json`, {
      headers: {
        "User-Agent": "redditly/1.0.0 by rafacv23",
      },
    })
    console.log("Reddit API response:", res)

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch subreddit" },
        { status: res.status }
      )
    }

    const data = await res.json()
    const redditPosts = data.data.children

    return NextResponse.json(redditPosts, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 })
  }
}
