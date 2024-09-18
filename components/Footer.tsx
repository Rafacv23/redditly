import {
  AUTHOR,
  GITHUB_URL,
  LINKEDIN_URL,
  PORTFOLIO_URL,
  SITE_NAME,
} from "@/site/config"
import { Github, Heart, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
      <aside>
        <p className="font-bold">{SITE_NAME}</p>
        <p className="flex items-center gap-2">
          Created with <Heart /> by
          <Link href={PORTFOLIO_URL} target="_blank" title="rafacanosa.dev">
            {AUTHOR}.
          </Link>
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link
            href={GITHUB_URL}
            title="Github Repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </Link>
          <Link
            href={LINKEDIN_URL}
            title="Linkedin Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </Link>
        </div>
      </nav>
    </footer>
  )
}
