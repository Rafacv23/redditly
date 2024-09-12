import Content from "@/components/Content"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Nav from "@/components/Nav"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Nav />
        <Content />
      </div>
      <Footer />
    </div>
  )
}
