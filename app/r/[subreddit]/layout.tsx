import Header from "@/components/Header"

export default function SubredditLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className="flex flex-1">{children}</div>
    </>
  )
}
