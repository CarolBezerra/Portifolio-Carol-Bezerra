import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import Portfolio from "./components/portfolio"
import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
