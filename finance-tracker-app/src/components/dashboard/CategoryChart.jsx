import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { useFinance } from '../../hooks/useFinance.jsx'
import { CHART_COLORS } from '../../utils/formatters.js'

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0].payload
    return (
      <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-3 text-sm">
        <p className="font-semibold text-slate-700">{name}</p>
        <p className="font-mono text-slate-500 mt-0.5">€ {value.toLocaleString()}</p>
      </div>
    )
  }
  return null
}

export default function CategoryChart() {
  const { categoryData } = useFinance()
  const total = categoryData.reduce((s, c) => s + c.value, 0)

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 card-shadow">
      <div className="mb-4">
        <h3 className="font-display font-600 text-slate-800">Spending by Category</h3>
        <p className="text-slate-400 text-xs mt-0.5">This month · Expenses only</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <ResponsiveContainer width={140} height={140}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={42}
                outerRadius={65}
                paddingAngle={3}
                dataKey="value"
              >
                {categoryData.map((_, i) => (
                  <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} strokeWidth={0} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex-1 space-y-2 min-w-0">
          {categoryData.slice(0, 6).map((c, i) => (
            <div key={c.name} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }}
              />
              <span className="text-xs text-slate-600 truncate flex-1">{c.name}</span>
              <span className="text-xs font-mono text-slate-500 flex-shrink-0">
                {total > 0 ? ((c.value / total) * 100).toFixed(0) : 0}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
