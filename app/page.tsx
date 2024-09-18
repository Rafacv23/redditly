import SearchBar from "@/components/SerchBar"
import { SITE_DESCRIPTION, SITE_NAME } from "@/site/config"

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{SITE_NAME}</h1>
          <p className="py-6">{SITE_DESCRIPTION}</p>
          <SearchBar />
        </div>
      </div>
    </div>
  )
}
