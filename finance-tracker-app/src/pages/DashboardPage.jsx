import Navbar           from '../components/layout/Navbar.jsx'
import BalanceCard       from '../components/dashboard/BalanceCard.jsx'
import StatCards         from '../components/dashboard/StatCards.jsx'
import MonthlyChart      from '../components/dashboard/MonthlyChart.jsx'
import CategoryChart     from '../components/dashboard/CategoryChart.jsx'
import TransactionList   from '../components/transactions/TransactionList.jsx'
import AddTransactionForm from '../components/transactions/AddTransactionForm.jsx'
import { useFinance }     from '../hooks/useFinance.jsx'
import { formatDate }     from '../utils/formatters.js'
import { Calendar }       from 'lucide-react'

export default function DashboardPage() {
  const { transactions } = useFinance()
  const today = formatDate(new Date().toISOString().split('T')[0])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-7 gap-2">
          <div>
            <h1 className="text-2xl font-display font-700 text-slate-900">Dashboard</h1>
            <p className="text-slate-400 text-sm mt-0.5">Your financial overview at a glance</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500 bg-white border border-slate-200 px-3 py-2 rounded-xl">
            <Calendar size={14} className="text-emerald-500" />
            {today}
          </div>
        </div>

        {/* Top row: balance + stat cards */}
        <div className="grid lg:grid-cols-3 gap-5 mb-5">
          <div className="lg:col-span-2">
            <BalanceCard />
          </div>
          <div className="lg:col-span-1">
            <StatCards />
          </div>
        </div>

        {/* Charts row */}
        <div className="grid lg:grid-cols-3 gap-5 mb-5">
          <div className="lg:col-span-2">
            <MonthlyChart />
          </div>
          <div className="lg:col-span-1">
            <CategoryChart />
          </div>
        </div>

        {/* Bottom row: transactions + add form */}
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <TransactionList />
          </div>
          <div className="lg:col-span-1">
            <AddTransactionForm />
          </div>
        </div>
      </main>
    </div>
  )
}
