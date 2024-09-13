import Content from "@/components/Content"
import { Suspense } from "react"
import Loading from "./loading"

export default async function Subreddit({
  params,
}: {
  params: { subreddit: string }
}) {
  return (
    <Suspense fallback={<Loading />}>
      <Content subreddit={params.subreddit} />
    </Suspense>
  )
}
