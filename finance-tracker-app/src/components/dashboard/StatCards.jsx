import { useFinance } from '../../hooks/useFinance.jsx'
import { formatCurrency } from '../../utils/formatters.js'
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react'

function MiniSparkline({ data, color }) {
  const max = Math.max(...data)
  return (
    <div className="flex gap-0.5 items-end h-10 mt-2">
      {data.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm transition-all duration-300"
          style={{
            height: `${(v / max) * 100}%`,
            backgroundColor: `${color}60`,
          }}
        />
      ))}
    </div>
  )
}

export default function StatCards() {
  const { totalIncome, totalExpenses } = useFinance()

  const incomeSparkline  = [55, 70, 60, 80, 75, 90, 100]
  const expenseSparkline = [65, 45, 70, 40, 80, 55, 60]

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Income */}
      <div className="bg-emerald-500 rounded-2xl p-5 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
        <div className="flex items-center gap-2 mb-1">
          <ArrowUpCircle size={15} className="text-emerald-200" />
          <p className="text-emerald-100 text-xs font-semibold uppercase tracking-wider">Income</p>
        </div>
        <p className="text-2xl font-mono font-500 tabular-nums">
          {formatCurrency(totalIncome)}
        </p>
        <MiniSparkline data={incomeSparkline} color="#ffffff" />
      </div>

      {/* Expenses */}
      <div className="bg-red-500 rounded-2xl p-5 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
        <div className="flex items-center gap-2 mb-1">
          <ArrowDownCircle size={15} className="text-red-200" />
          <p className="text-red-100 text-xs font-semibold uppercase tracking-wider">Expenses</p>
        </div>
        <p className="text-2xl font-mono font-500 tabular-nums">
          {formatCurrency(totalExpenses)}
        </p>
        <MiniSparkline data={expenseSparkline} color="#ffffff" />
      </div>
    </div>
  )
}
