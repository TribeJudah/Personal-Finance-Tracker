import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { useFinance } from '../../hooks/useFinance.jsx'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-3 text-sm">
        <p className="font-semibold text-slate-700 mb-1.5">{label}</p>
        {payload.map(p => (
          <div key={p.name} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
            <span className="text-slate-500 capitalize">{p.name}:</span>
            <span className="font-mono font-500 text-slate-800">€{p.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default function MonthlyChart() {
  const { monthlyData } = useFinance()

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 card-shadow">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-display font-600 text-slate-800">Monthly Overview</h3>
          <p className="text-slate-400 text-xs mt-0.5">Income vs Expenses · Last 6 months</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
            <span className="text-slate-500">Income</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-red-400" />
            <span className="text-slate-500">Expenses</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={monthlyData} barGap={4} barCategoryGap="30%">
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#94a3b8', fontFamily: 'DM Sans' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: '#94a3b8', fontFamily: 'DM Sans' }}
            tickFormatter={v => `€${(v/1000).toFixed(0)}k`}
            width={45}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(241,245,249,0.5)', radius: 6 }} />
          <Bar dataKey="income"   name="income"   fill="#10b981" radius={[4,4,0,0]} />
          <Bar dataKey="expenses" name="expenses" fill="#f87171" radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
