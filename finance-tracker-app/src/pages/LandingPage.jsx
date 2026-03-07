import Navbar from '../components/layout/Navbar.jsx'
import Hero    from '../components/landing/Hero.jsx'
import Features from '../components/landing/Features.jsx'
import CTA     from '../components/landing/CTA.jsx'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="bg-slate-900 text-slate-500 text-center text-xs py-6">
        © {new Date().getFullYear()} FinanceTracker · Built with React & Tailwind CSS
      </footer>
    </div>
  )
}
