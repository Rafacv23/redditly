import { GITHUB_URL, SITE_DESCRIPTION, SITE_NAME } from "@/site/config"
import { Github } from "lucide-react"
import SearchBar from "@/components/SerchBar"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-4xl max-h-4xl bg-emerald-500 rounded-full opacity-10 blur-3xl" />
      </div>
      <div className="container relative px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-emerald-500 blur-xl opacity-50 rounded-full" />
              <div className="relative bg-black rounded-full p-2">
                <img
                  src="/favicon.ico"
                  alt="Redder logo"
                  className="w-16 h-16"
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              {SITE_NAME}
            </h1>
            <p className="max-w-[600px] text-gray-400 md:text-xl mx-auto">
              {SITE_DESCRIPTION}
            </p>
          </div>
          <div className="w-full max-w-md bg-gray-900/30 backdrop-blur-xl border border-gray-800 shadow-2xl transition-all duration-300 hover:shadow-emerald-500/10">
            <div className="p-6 space-y-4 grid">
              <SearchBar />
              <Link
                href={GITHUB_URL}
                title="Github repository"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github className="h-4 w-4" />
                Star on Github
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
    </section>
  )
}
