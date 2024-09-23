import SearchBar from "@/components/SerchBar"
import Drawer from "@/components/ui/Drawer"
import { SITE_NAME } from "@/site/config"
import Link from "next/link"

export default function Header({ subreddit }: { subreddit: string }) {
  return (
    <div className="navbar bg-base-200 p-4 sticky top-0 z-50">
      <div className="flex-1">
        <h1 className="hidden 2xl:btn 2xl:btn-ghost 2xl:text-xl">
          <img src="/favicon.ico" width={30} alt="Redder logo" />
          <Link href="/" title="Home screen">
            {SITE_NAME}
          </Link>
        </h1>
        <Drawer subreddit={subreddit} display="mobile" />
      </div>
      <div className="flex-none gap-2">
        <SearchBar />
      </div>
    </div>
  )
}
