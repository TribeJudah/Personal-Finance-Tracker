import { useFinance } from '../../hooks/useFinance.jsx'
import { formatCurrency } from '../../utils/formatters.js'
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react'

export default function BalanceCard() {
  const { balance, totalIncome, totalExpenses } = useFinance()
  const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome * 100).toFixed(0) : 0

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white card-shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Current Balance</p>
          <h2 className="text-4xl font-mono font-500 mt-1 tabular-nums">
            {formatCurrency(balance)}
          </h2>
        </div>
        <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center">
          <Wallet size={20} className="text-emerald-400" />
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className={`flex items-center gap-1 font-semibold ${balance >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
          {balance >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {savingsRate}% saved
        </span>
        <span className="text-slate-500">·</span>
        <span className="text-slate-400">this month</span>
      </div>

      {/* Progress bar */}
      <div className="mt-4">
        <div className="flex justify-between text-xs text-slate-400 mb-1.5">
          <span>Expenses vs Income</span>
          <span>{totalIncome > 0 ? ((totalExpenses / totalIncome) * 100).toFixed(0) : 0}% spent</span>
        </div>
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-700"
            style={{ width: `${Math.min((totalExpenses / totalIncome) * 100, 100)}%` }}
          />
        </div>
      </div>
    </div>
  )
}
