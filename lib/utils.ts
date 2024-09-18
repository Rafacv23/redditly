export function formatSearchValue(searchValue: string): string {
  return searchValue.replace(/\s+/g, "").toLowerCase()
}

export function formatDate(utcSeconds: number): string {
  const postDate = new Date(utcSeconds * 1000) // Convertir de segundos a milisegundos
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000)

  const secondsInMinute = 60
  const secondsInHour = 3600
  const secondsInDay = 86400
  const secondsInMonth = 2592000 // Aproximadamente 30 días
  const secondsInYear = 31536000 // Aproximadamente 365 días

  if (diffInSeconds < secondsInMinute) {
    return `hace ${diffInSeconds} segundos`
  } else if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute)
    return `hace ${minutes} minuto${minutes !== 1 ? "s" : ""}`
  } else if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour)
    return `hace ${hours} hora${hours !== 1 ? "s" : ""}`
  } else if (diffInSeconds < secondsInMonth) {
    const days = Math.floor(diffInSeconds / secondsInDay)
    return `hace ${days} día${days !== 1 ? "s" : ""}`
  } else if (diffInSeconds < secondsInYear) {
    const months = Math.floor(diffInSeconds / secondsInMonth)
    return `hace ${months} mes${months !== 1 ? "es" : ""}`
  } else {
    const years = Math.floor(diffInSeconds / secondsInYear)
    return `hace ${years} año${years !== 1 ? "s" : ""}`
  }
}
