import Navbar from "../components/layout/Navbar"
import Hero from "../components/Landing/Hero"

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
    </div>
  )
}