import Navbar from "@/components/NavBar";
import Hero from "./home/page";
import ExplorePage from "./explore/page";
import PopularProducts from "./popular-products/page";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExplorePage />
      <PopularProducts />
    </>
  )
}
