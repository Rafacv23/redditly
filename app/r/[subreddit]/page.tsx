import Content from "@/components/Content"

export default async function Subreddit({
  params,
}: {
  params: { subreddit: string }
}) {
  return (
    <div>
      <h2>{params.subreddit}</h2>
      <Content subreddit={params.subreddit} />
    </div>
  )
}
