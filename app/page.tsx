import SearchBar from "@/components/SerchBar"
import { SITE_NAME } from "@/site/config"
import { Check } from "lucide-react"

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-start">
        <div className="max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-primary-200 to-primary-800 bg-clip-text text-transparent">
              {SITE_NAME}
            </h1>
            <p className="py-4 text-lg">The easiest way to explore Reddit</p>
            <ul className="list-inside space-y-2 text-base">
              <li className="flex gap-4 items-center">
                <Check color="#00FF6F" />
                Feature 1
              </li>
              <li className="flex gap-4 items-center">
                <Check color="#00FF6F" />
                Feature 2
              </li>
              <li className="flex gap-4 items-center">
                <Check color="#00FF6F" />
                Feature 3
              </li>
              <li className="flex gap-4 items-center">
                <Check color="#00FF6F" />
                Feature 4
              </li>
            </ul>
          </div>
          <div className="flex flex-col card shadow-xl p-6 w-full max-w-md bg-secondary">
            <h2 className="text-2xl font-semibold">Start Exploring</h2>
            <small className="text-sm text-gray-500">Choose a subreddit</small>
            <SearchBar />
            <small className="mt-4 text-sm text-gray-500">
              Recently Visited
            </small>
            <ul className=" list-inside space-y-2 text-base">
              <li className="btn btn-primary btn-outline">r/F1Manager</li>
              <li className="btn btn-primary btn-outline">r/NBA</li>
              <li className="btn btn-primary btn-outline">r/NBA</li>
              <li className="btn btn-primary btn-outline">r/Play</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
