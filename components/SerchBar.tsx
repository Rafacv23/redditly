"use client"

import { CircleX, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { formatSearchValue } from "@/lib/utils"
import { useRedditStore } from "@/store/store"
import Link from "next/link"

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const router = useRouter()
  const recentSubreddits = useRedditStore((state) => state.recentSubreddits)

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Find the modal element
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement

    // Close the modal before redirecting
    if (modal) modal.close()

    // Redirect to the dynamic page
    setSearchTerm("")
    router.push(`/r/${formatSearchValue(searchTerm)}`)
  }

  const handleCloseModal = () => {
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement
    if (modal) modal.close()
  }

  return (
    <div className="form-control">
      <button
        className="btn btn-outline btn-primary"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_3"
          ) as HTMLDialogElement
          if (modal) modal.showModal()
        }}
      >
        <Search />
        Search
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" className="modal-header">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <CircleX />
            </button>
          </form>
          <form onSubmit={handleSearchSubmit} className="mt-8">
            <label className="input input-bordered flex items-center gap-2 mt-4">
              <Search />
              <input
                type="text"
                className="grow"
                placeholder="Type for a subreddit"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
            </label>
            <button type="submit" className="btn btn-primary mt-4 hidden">
              Enviar
            </button>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
          {recentSubreddits.length > 0 && (
            <>
              <small className="text-primary">Recently visited</small>
              <ul className="menu bg-base-200 rounded-box mt-2">
                {recentSubreddits.map((subreddit, index) => (
                  <li key={index}>
                    <Link href={`/r/${subreddit}`} onClick={handleCloseModal}>
                      r/{subreddit}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </dialog>
    </div>
  )
}
