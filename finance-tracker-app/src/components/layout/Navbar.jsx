import { Link, useLocation, useNavigate } from 'react-router-dom'
import { TrendingUp, BarChart2, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const navigate  = useNavigate()
  const isDashboard = location.pathname === '/dashboard'
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 glass border-b border-slate-200/60 card-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shadow-sm group-hover:bg-emerald-600 transition-colors">
            <TrendingUp size={16} className="text-white" />
          </div>
          <span className="font-display font-700 text-slate-800 text-lg leading-none">
            Finance<span className="text-emerald-500">Tracker</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-3">
          {isDashboard ? (
            <Link
              to="/"
              className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors px-3 py-1.5"
            >
              ← Home
            </Link>
          ) : (
            <Link
              to="/"
              className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors px-3 py-1.5"
            >
              Features
            </Link>
          )}
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-md active:scale-95"
          >
            <BarChart2 size={15} />
            {isDashboard ? 'Dashboard' : 'Get Started'}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="sm:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100"
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 pt-1 border-t border-slate-100 flex flex-col gap-2 bg-white/95">
          <Link to="/" className="text-sm text-slate-600 py-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <button
            onClick={() => { navigate('/dashboard'); setMenuOpen(false) }}
            className="bg-emerald-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-left"
          >
            Get Started →
          </button>
        </div>
      )}
    </nav>
  )
}
