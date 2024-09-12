"use client"

import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="form-control">
      <button
        className="btn btn-outline btn-primary"
        onClick={() => document.getElementById("my_modal_3").showModal()}
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
          <label className="input input-bordered flex items-center gap-2 mt-4">
            <Search />
            <input
              type="text"
              className="grow"
              placeholder="What are you looking for?"
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
