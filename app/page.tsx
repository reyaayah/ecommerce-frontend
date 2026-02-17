import Navbar from "@/components/NavBar";
import Hero from "./home/page";
import ExplorePage from "./explore/page";
import PopularProducts from "./popular-products/page";
import SpecialPackageSection from "@/components/landing-page/specialPackageSection";
import Footer from "@/components/landing-page/FooterSection";
import NewsletterSection from "@/components/landing-page/NewsLetterSection";
import TestimonialSection from "@/components/landing-page/TestimonialSection";
import BenefitsSection from "@/components/landing-page/BenefitsSection";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExplorePage />
      <PopularProducts />
      <SpecialPackageSection />
      <BenefitsSection />
      <TestimonialSection />
      <NewsletterSection />
      <Footer />
    </>
  )
}
