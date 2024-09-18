import Link from "next/link"
import { PostData } from "../Post"
import { formatDate } from "@/lib/utils"
import { Pin } from "lucide-react"

export default function PostHeader({
  post,
  link,
}: {
  post: PostData
  link: string
}) {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <small className="flex gap-2">
        <Link
          href={`https://www.reddit.com/user/${post.author}/`}
          title={post.author}
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary hover:transition-colors"
        >
          u/{post.author}
        </Link>
        <p>Publicado {formatDate(post.created_utc)}</p>
      </small>
      <div>
        {post.over_18 && <span className="badge bg-red-600">NSFW</span>}
        {post.spoiler && <span className="badge bg-yellow-600">Spoiler</span>}
      </div>
      <h2 className="card-title">
        <Link
          href={link}
          title={`${post.title}`}
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-primary hover:transition-colors"
        >
          {post.title}
        </Link>
        {post.stickied ? <Pin color="oklch(var(--p))" /> : null}
      </h2>
      {post.link_flair_richtext.length > 0 && (
        <div className="mt-2 flex">
          {post.link_flair_richtext.map((flair, index) => (
            <span
              key={index}
              className="badge mr-2 font-semibold"
              title={flair.t}
              style={{
                backgroundColor: post.link_flair_background_color || "#ddd", // Usa el color de fondo de la etiqueta, o un color por defecto
                color: "black", // Color de texto blanco por defecto
              }}
            >
              {flair.e === "emoji" ? (
                <img
                  src={flair.u}
                  alt={flair.t}
                  className="inline-block w-4 h-4"
                  loading="lazy"
                />
              ) : null}
              {flair.t}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
