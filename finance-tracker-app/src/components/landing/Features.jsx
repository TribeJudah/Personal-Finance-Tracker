import { BarChart2, PieChart, Bell, Download, Shield, Smartphone } from 'lucide-react'

const FEATURES = [
  {
    icon: BarChart2,
    title: 'Monthly Overview',
    desc: 'See income vs. expenses at a glance with beautiful bar charts and trends over time.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: PieChart,
    title: 'Category Breakdown',
    desc: 'Understand exactly where your money goes with interactive pie charts by category.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Bell,
    title: 'Budget Alerts',
    desc: 'Get notified when you\'re nearing spending limits so you stay on track effortlessly.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Download,
    title: 'Export Reports',
    desc: 'Download detailed PDF or CSV reports for any time range to share or archive.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    desc: 'All your financial data stays private. No ads, no data sharing, ever.',
    color: 'bg-slate-50 text-slate-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    desc: 'Fully responsive design means you can track finances from any device, anywhere.',
    color: 'bg-pink-50 text-pink-600',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <span className="text-emerald-500 text-sm font-semibold uppercase tracking-wider">Everything you need</span>
          <h2 className="text-4xl font-display font-700 text-slate-900">
            Powerful features,<br />beautifully simple
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-base">
            Built for people who want clarity over complexity. Every feature is designed to help you make better financial decisions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform`}>
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-800 mb-1.5 text-base">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
