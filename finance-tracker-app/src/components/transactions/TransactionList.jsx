import { useState } from 'react'
import { useFinance } from '../../hooks/useFinance.jsx'
import { formatCurrency, formatDate, CATEGORY_COLORS } from '../../utils/formatters.js'
import { Trash2, Search, ArrowUpCircle, ArrowDownCircle } from 'lucide-react'

const ITEMS_PER_PAGE = 8

export default function TransactionList() {
  const { transactions, deleteTransaction } = useFinance()
  const [search, setSearch]     = useState('')
  const [filter, setFilter]     = useState('all')
  const [page, setPage]         = useState(1)
  const [deletingId, setDeletingId] = useState(null)

  const filtered = transactions.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
                        t.category.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'all' || t.type === filter
    return matchSearch && matchFilter
  })

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated  = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const handleDelete = (id) => {
    setDeletingId(id)
    setTimeout(() => {
      deleteTransaction(id)
      setDeletingId(null)
    }, 250)
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 card-shadow overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-slate-50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-display font-600 text-slate-800">Transaction History</h3>
            <p className="text-slate-400 text-xs mt-0.5">{filtered.length} transactions</p>
          </div>
          <div className="flex items-center gap-2">
            {/* Filter tabs */}
            <div className="flex bg-slate-100 rounded-lg p-0.5 text-xs font-semibold">
              {['all', 'income', 'expense'].map(f => (
                <button
                  key={f}
                  onClick={() => { setFilter(f); setPage(1) }}
                  className={`px-2.5 py-1.5 rounded-md capitalize transition-all ${
                    filter === f
                      ? 'bg-white text-slate-800 shadow-sm'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative mt-3">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1) }}
            className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all"
          />
        </div>
      </div>

      {/* List */}
      <div className="divide-y divide-slate-50">
        {paginated.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-sm">
            No transactions found
          </div>
        ) : (
          paginated.map(t => (
            <div
              key={t.id}
              className={`flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50/70 transition-all group ${
                deletingId === t.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
              style={{ transition: 'opacity 0.25s, transform 0.25s' }}
            >
              {/* Icon */}
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                t.type === 'income' ? 'bg-emerald-100' : 'bg-red-50'
              }`}>
                {t.type === 'income'
                  ? <ArrowUpCircle size={16} className="text-emerald-600" />
                  : <ArrowDownCircle size={16} className="text-red-500" />
                }
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-700 truncate">{t.name}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor: `${CATEGORY_COLORS[t.category] || '#94a3b8'}18`,
                      color: CATEGORY_COLORS[t.category] || '#64748b',
                    }}
                  >
                    {t.category}
                  </span>
                  <span className="text-xs text-slate-400">{formatDate(t.date)}</span>
                </div>
              </div>

              {/* Amount */}
              <div className="flex items-center gap-3">
                <span className={`font-mono font-500 text-sm tabular-nums ${
                  t.type === 'income' ? 'text-emerald-600' : 'text-red-500'
                }`}>
                  {t.type === 'income' ? '+' : '-'}{formatCurrency(t.amount)}
                </span>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-300 hover:text-red-400 hover:bg-red-50 rounded-lg transition-all"
                  title="Delete transaction"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5 p-4 border-t border-slate-50">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-7 h-7 rounded-lg text-xs font-semibold transition-all ${
                page === p
                  ? 'bg-emerald-500 text-white'
                  : 'text-slate-400 hover:bg-slate-100'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
