export function formatSearchValue(searchValue: string): string {
  return searchValue.replace(/\s+/g, "").toLowerCase()
}
