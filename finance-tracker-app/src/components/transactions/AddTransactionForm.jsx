import { useState } from 'react'
import { useFinance } from '../../hooks/useFinance.jsx'
import { Plus, CheckCircle } from 'lucide-react'

export default function AddTransactionForm() {
  const { addTransaction, CATEGORIES } = useFinance()
  const [form, setForm]       = useState({ name: '', amount: '', category: '' })
  const [errors, setErrors]   = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim())      errs.name     = 'Item name is required'
    if (!form.amount)           errs.amount   = 'Amount is required'
    if (parseFloat(form.amount) <= 0) errs.amount = 'Amount must be positive'
    if (!form.category)         errs.category = 'Please select a category'
    return errs
  }

  const handleSubmit = () => {
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    setTimeout(() => {
      addTransaction(form)
      setForm({ name: '', amount: '', category: '' })
      setErrors({})
      setSuccess(true)
      setLoading(false)
      setTimeout(() => setSuccess(false), 2500)
    }, 400)
  }

  const handleChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: null }))
  }

  if (success) {
    return (
      <div className="bg-white rounded-2xl border border-emerald-200 card-shadow p-6 flex flex-col items-center justify-center gap-3 min-h-[280px]">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle size={28} className="text-emerald-600" />
        </div>
        <p className="font-semibold text-slate-800">Transaction Added!</p>
        <p className="text-slate-400 text-sm text-center">Your transaction has been recorded successfully.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 card-shadow p-5">
      <div className="mb-5">
        <h3 className="font-display font-600 text-slate-800">Add Transaction</h3>
        <p className="text-slate-400 text-xs mt-0.5">Record income or expense</p>
      </div>

      <div className="space-y-3.5">
        {/* Item name */}
        <div>
          <input
            type="text"
            placeholder="Item Name"
            value={form.name}
            onChange={e => handleChange('name', e.target.value)}
            className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all ${
              errors.name
                ? 'border-red-300 focus:ring-red-500/20 focus:border-red-400'
                : 'border-slate-200 focus:ring-emerald-500/20 focus:border-emerald-400'
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Amount */}
        <div>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-mono">€</span>
            <input
              type="number"
              placeholder="0.00  (use negative for expenses)"
              value={form.amount}
              onChange={e => handleChange('amount', e.target.value)}
              min="0"
              step="0.01"
              className={`w-full pl-8 pr-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all font-mono ${
                errors.amount
                  ? 'border-red-300 focus:ring-red-500/20 focus:border-red-400'
                  : 'border-slate-200 focus:ring-emerald-500/20 focus:border-emerald-400'
              }`}
            />
          </div>
          {errors.amount
            ? <p className="text-red-500 text-xs mt-1">{errors.amount}</p>
            : <p className="text-slate-400 text-xs mt-1">e.g. 150 for expenses · Category determines income/expense</p>
          }
        </div>

        {/* Category */}
        <div>
          <select
            value={form.category}
            onChange={e => handleChange('category', e.target.value)}
            className={`w-full px-4 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all appearance-none bg-white cursor-pointer ${
              errors.category
                ? 'border-red-300 focus:ring-red-500/20 focus:border-red-400'
                : 'border-slate-200 focus:ring-emerald-500/20 focus:border-emerald-400'
            } ${!form.category ? 'text-slate-400' : 'text-slate-700'}`}
          >
            <option value="">Select Category</option>
            <optgroup label="── Income">
              <option value="Salary">Salary</option>
              <option value="Freelance">Freelance</option>
              <option value="Investment">Investment</option>
              <option value="Gift">Gift</option>
            </optgroup>
            <optgroup label="── Expenses">
              <option value="Groceries">Groceries</option>
              <option value="Dining">Dining</option>
              <option value="Transport">Transport</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Shopping">Shopping</option>
              <option value="Other">Other</option>
            </optgroup>
          </select>
          {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
        </div>

        {/* Preview pill */}
        {form.category && form.amount && parseFloat(form.amount) > 0 && (
          <div className={`flex items-center gap-2 text-xs px-3 py-2 rounded-lg ${
            ['Salary','Freelance','Investment','Gift'].includes(form.category)
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-red-50 text-red-600 border border-red-200'
          }`}>
            <div className={`w-1.5 h-1.5 rounded-full ${
              ['Salary','Freelance','Investment','Gift'].includes(form.category)
                ? 'bg-emerald-500' : 'bg-red-500'
            }`} />
            This will be recorded as{' '}
            <strong>
              {['Salary','Freelance','Investment','Gift'].includes(form.category) ? 'income' : 'expense'}
            </strong>
          </div>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white font-semibold py-3 rounded-xl transition-all hover:shadow-md active:scale-[0.98] text-sm"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          ) : (
            <Plus size={16} />
          )}
          {loading ? 'Adding...' : 'Add Transaction'}
        </button>
      </div>
    </div>
  )
}
