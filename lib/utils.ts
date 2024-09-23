import { SITE_URL } from "@/site/config"

export function formatSearchValue(searchValue: string): string {
  return searchValue.replace(/\s+/g, "").toLowerCase()
}

export function formatDate(utcSeconds: number): string {
  const postDate = new Date(utcSeconds * 1000) // Convert seconds to milliseconds
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000)

  const secondsInMinute = 60
  const secondsInHour = 3600
  const secondsInDay = 86400
  const secondsInMonth = 2592000 // Approx 30 days
  const secondsInYear = 31536000 // Approx 365 days

  if (diffInSeconds < secondsInMinute) {
    return `${diffInSeconds} second${diffInSeconds !== 1 ? "s" : ""} ago`
  } else if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute)
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`
  } else if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour)
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`
  } else if (diffInSeconds < secondsInMonth) {
    const days = Math.floor(diffInSeconds / secondsInDay)
    return `${days} day${days !== 1 ? "s" : ""} ago`
  } else if (diffInSeconds < secondsInYear) {
    const months = Math.floor(diffInSeconds / secondsInMonth)
    return `${months} month${months !== 1 ? "s" : ""} ago`
  } else {
    const years = Math.floor(diffInSeconds / secondsInYear)
    return `${years} year${years !== 1 ? "s" : ""} ago`
  }
}

export async function fetchSubreddit(subreddit: string) {
  const res = await fetch(`${SITE_URL}/api/fetch?subreddit=${subreddit}`)
  if (!res.ok) return undefined
  return res.json()
}
