import Content from "@/components/Content"

export default async function Subreddit({
  params,
}: {
  params: { subreddit: string }
}) {
  return <Content subreddit={params.subreddit} />
}
