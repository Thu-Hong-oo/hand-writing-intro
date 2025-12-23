import Hero from "@/components/hero"
import Services from "@/components/services"
import Products from "@/components/products"
import Pricing from "@/components/pricing"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Products />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
