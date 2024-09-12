import Content from "@/components/Content"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Nav from "@/components/Nav"

export default function Home() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
      <div className="col-span-4 col-start-2 row-start-1">
        <Header />
      </div>
      <div className="row-span-5 col-start-1 row-start-1">
        <Nav />
      </div>
      <div className="col-span-4 row-span-3 col-start-2 row-start-2">
        <Content />
      </div>
      <div className="col-span-4 col-start-2 row-start-5">
        <Footer />
      </div>
    </div>
  )
}
