"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { formatSearchValue } from "@/lib/utils"

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const router = useRouter()

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
        Search...
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" className="modal-header">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              esc
            </button>
          </form>
          <form onSubmit={handleSearchSubmit} className="mt-8">
            <label className="input input-bordered flex items-center gap-2 mt-4">
              <Search />
              <input
                type="text"
                className="grow"
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
            <button type="submit" className="btn btn-primary mt-4">
              Enviar
            </button>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </div>
      </dialog>
    </div>
  )
}
