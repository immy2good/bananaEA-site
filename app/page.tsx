import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Performance } from "@/components/performance"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Performance />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}
