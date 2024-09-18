import SearchBar from "@/components/SerchBar"
import Drawer from "@/components/ui/Drawer"
import { SITE_NAME } from "@/site/config"
import Link from "next/link"
import ThemeToggle from "@/components/ThemeToggle"

export default function Header() {
  return (
    <div className="navbar bg-base-100 p-4 sticky top-0  z-50">
      <div className="flex-1">
        <h1 className="hidden lg:btn lg:btn-ghost lg:text-xl">
          <Link href="/" title="Home screen">
            {SITE_NAME}
          </Link>
        </h1>
        <Drawer display="mobile" />
      </div>
      <div className="flex-none gap-2">
        <SearchBar />
        <ThemeToggle />
      </div>
    </div>
  )
}
