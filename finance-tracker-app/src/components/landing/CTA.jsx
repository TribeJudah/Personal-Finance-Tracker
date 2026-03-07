import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const navigate = useNavigate()

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-4xl lg:text-5xl font-display font-700 text-white leading-tight">
          Ready to take control of your finances?
        </h2>
        <p className="text-slate-300 text-lg">
          Join thousands of people who track their income and expenses with FinanceTracker.
          It's free, private, and takes just seconds to start.
        </p>
        <button
          onClick={() => navigate('/dashboard')}
          className="group inline-flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all hover:shadow-xl hover:shadow-emerald-900/40 active:scale-[0.98]"
        >
          Start Tracking for Free
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="text-slate-500 text-sm">No sign up required · No credit card · 100% free</p>
      </div>
    </section>
  )
}
