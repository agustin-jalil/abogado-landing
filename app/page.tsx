import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ReviewsSection } from "@/components/reviews-section"
import { AreasSection } from "@/components/areas-section"
import { CtaSection, Footer } from "@/components/cta-footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div id="inicio">
        <HeroSection />
      </div>
      <div id="resenas">
        <ReviewsSection />
      </div>
      <div id="areas">
        <AreasSection />
      </div>
      <div id="contacto">
        <CtaSection />
      </div>
      <Footer />
    </main>
  )
}
