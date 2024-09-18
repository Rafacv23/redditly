import { SITE_NAME } from "@/site/config"
import { Github, Heart, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="footer footer-center bg-primary text-primary-content p-10">
      <aside>
        <p className="font-bold">{SITE_NAME}</p>
        <p className="flex items-center gap-2">
          Created with <Heart /> by{" "}
          <a
            href="https://www.rafacanosa.dev"
            target="_blank"
            title="rafacanosa.dev"
          >
            Rafa Canosa.
          </a>
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <Github />
          </a>
          <a>
            <Linkedin />
          </a>
        </div>
      </nav>
    </footer>
  )
}
