"use client"

import { useEffect, useState } from "react"
import { MoveUp } from "lucide-react"

export default function UpBtn() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Maneja la visibilidad del botón según el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          className="btn my-8 fixed bottom-4 right-4"
          onClick={scrollToTop}
          title="Back to top"
        >
          <MoveUp />
        </button>
      )}
    </>
  )
}
