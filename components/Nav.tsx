import Drawer from "@/components/ui/Drawer"

export default function Nav({ subreddit }: { subreddit: string }) {
  return (
    <div className="2xl:w-1/5 px-4 sticky top-20 h-screen bg-base-200">
      <Drawer subreddit={subreddit} display="desktop" />
    </div>
  )
}
