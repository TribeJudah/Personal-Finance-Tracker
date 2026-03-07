import { useNavigate } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Zap, PieChart } from 'lucide-react'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 pt-16 pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-slate-300/20 rounded-full blur-2xl" />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-200">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              Real-time tracking
            </div>

            <h1 className="text-5xl lg:text-6xl font-display font-800 text-slate-900 leading-tight">
              Track your{' '}
              <span className="relative">
                <span className="text-emerald-500">income</span>
              </span>
              {' '}and{' '}
              <span className="text-slate-700">expenses</span>
              {' '}in real time
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed max-w-md">
              Visualize your spending habits, monitor cash flow, and stay in complete
              control of your finances — all in one elegant dashboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="group flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-200 active:scale-[0.98] animate-pulse-green"
              >
                Start Tracking
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-slate-700 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all">
                See Demo
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-2">
              {[
                { icon: ShieldCheck, label: 'Bank-level security' },
                { icon: Zap,         label: 'Instant sync' },
                { icon: PieChart,    label: 'Smart analytics' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-slate-500 text-sm">
                  <Icon size={15} className="text-emerald-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mock dashboard card */}
          <div className="animate-fade-up animate-delay-200 opacity-0-init">
            <MockDashboardCard />
          </div>
        </div>
      </div>
    </section>
  )
}

function MockDashboardCard() {
  return (
    <div className="bg-white rounded-2xl card-shadow-lg p-6 border border-slate-100 max-w-md ml-auto">
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Current Balance</span>
        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">March 2026</span>
      </div>

      <div className="text-4xl font-mono font-500 text-slate-900 mb-6">
        € 5,200.00
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="bg-emerald-500 rounded-xl p-4">
          <p className="text-emerald-100 text-xs font-semibold mb-1">Income</p>
          <p className="text-white text-xl font-mono font-500">€ 8,000</p>
          <div className="flex gap-0.5 mt-2 items-end h-8">
            {[30, 50, 40, 70, 60, 80, 65].map((h, i) => (
              <div key={i} className="flex-1 bg-emerald-400/60 rounded-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="bg-red-500 rounded-xl p-4">
          <p className="text-red-100 text-xs font-semibold mb-1">Expenses</p>
          <p className="text-white text-xl font-mono font-500">€ 2,800</p>
          <div className="flex gap-0.5 mt-2 items-end h-8">
            {[60, 40, 55, 30, 70, 45, 50].map((h, i) => (
              <div key={i} className="flex-1 bg-red-400/60 rounded-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Mini transaction list */}
      <div className="space-y-2.5">
        {[
          { name: 'Groceries',    amount: '-€ 150', color: 'text-red-500'     },
          { name: 'Salary',       amount: '+€ 4,000', color: 'text-emerald-500' },
          { name: 'Electricity',  amount: '-€ 200', color: 'text-red-500'     },
        ].map((t) => (
          <div key={t.name} className="flex items-center justify-between py-1.5 border-b border-slate-50 last:border-0">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-slate-300" />
              <span className="text-sm text-slate-600">{t.name}</span>
            </div>
            <span className={`text-sm font-mono font-500 ${t.color}`}>{t.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
