import Content from "@/components/Content"
import { Suspense } from "react"
import Loading from "./loading"
import Nav from "@/components/Nav"

export default async function Subreddit({
  params,
}: {
  params: { subreddit: string }
}) {
  return (
    <Suspense fallback={<Loading />}>
      <Nav />
      <Content subreddit={params.subreddit} />
    </Suspense>
  )
}
