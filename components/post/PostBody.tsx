import { PostData } from "@/components/Post"

export default function PostBody({ post }: { post: PostData }) {
  return (
    <div>
      <p>{post.selftext.substring(0, 400)}</p>
      {/* Mostrar contenido multimedia */}
      {post.is_video && post.media?.reddit_video && (
        <video controls className=" max-w-md">
          <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
        </video>
      )}
      {post.secure_media_embed?.content && (
        <div
          className="embed-container max-w-md"
          dangerouslySetInnerHTML={{
            __html: post.secure_media_embed.content,
          }}
        />
      )}
      {post.url.endsWith(".jpg") || post.url.endsWith(".png") ? (
        <img className="max-w-md" src={post.url} alt={post.title} />
      ) : null}
    </div>
  )
}
