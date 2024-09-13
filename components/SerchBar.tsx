"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const router = useRouter()
  const modal = document.getElementById("my_modal_3") as HTMLDialogElement

  const handleSearchSubmit = async (e) => {
    e.preventDefault()

    // Cerrar el modal antes de redirigir
    if (modal) modal.close()

    // Redirigir a la página dinámica
    router.push(`/r/${searchTerm}`)
    setSearchTerm("")
  }

  return (
    <div className="form-control">
      <button
        className="btn btn-outline btn-primary"
        onClick={() => modal.showModal()}
      >
        <Search />
        Search...
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              esc
            </button>
          </form>
          <form onSubmit={handleSearchSubmit}>
            <button>Enviar</button>
          </form>
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
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}
