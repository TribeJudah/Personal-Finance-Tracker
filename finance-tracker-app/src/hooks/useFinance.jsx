import { createContext, useContext, useState, useCallback } from 'react'
import { format } from 'date-fns'

const CATEGORIES = [
  'Salary', 'Freelance', 'Investment', 'Gift',
  'Groceries', 'Dining', 'Transport', 'Utilities',
  'Entertainment', 'Healthcare', 'Shopping', 'Other'
]

const INCOME_CATEGORIES = ['Salary', 'Freelance', 'Investment', 'Gift']

const INITIAL_TRANSACTIONS = [
  { id: 1, name: 'Monthly Salary',   amount: 4000,  category: 'Salary',     date: '2025-03-01', type: 'income'  },
  { id: 2, name: 'Freelance Project',amount: 1500,  category: 'Freelance',  date: '2025-03-05', type: 'income'  },
  { id: 3, name: 'Investment Return', amount: 2500, category: 'Investment', date: '2025-03-08', type: 'income'  },
  { id: 4, name: 'Groceries',        amount: 150,   category: 'Groceries',  date: '2025-03-10', type: 'expense' },
  { id: 5, name: 'Electricity Bill', amount: 200,   category: 'Utilities',  date: '2025-03-11', type: 'expense' },
  { id: 6, name: 'Dinner Out',       amount: 75,    category: 'Dining',     date: '2025-03-12', type: 'expense' },
  { id: 7, name: 'Netflix',          amount: 15,    category: 'Entertainment', date: '2025-03-14', type: 'expense' },
  { id: 8, name: 'Bus Pass',         amount: 60,    category: 'Transport',  date: '2025-03-15', type: 'expense' },
  { id: 9, name: 'Pharmacy',         amount: 40,    category: 'Healthcare', date: '2025-03-16', type: 'expense' },
  { id: 10,name: 'Online Shopping',  amount: 120,   category: 'Shopping',   date: '2025-03-18', type: 'expense' },
]

const FinanceContext = createContext(null)

export function FinanceProvider({ children }) {
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS)
  const [nextId, setNextId] = useState(11)

  const addTransaction = useCallback((data) => {
    const isIncome = INCOME_CATEGORIES.includes(data.category)
    const newTx = {
      id: nextId,
      name: data.name,
      amount: parseFloat(data.amount),
      category: data.category,
      date: format(new Date(), 'yyyy-MM-dd'),
      type: isIncome ? 'income' : 'expense',
    }
    setTransactions(prev => [newTx, ...prev])
    setNextId(n => n + 1)
    return newTx
  }, [nextId])

  const deleteTransaction = useCallback((id) => {
    setTransactions(prev => prev.filter(t => t.id !== id))
  }, [])

  const totalIncome   = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0)
  const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0)
  const balance       = totalIncome - totalExpenses

  // Spending by category (expenses only)
  const byCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount
      return acc
    }, {})

  const categoryData = Object.entries(byCategory)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)

  // Monthly data for bar chart (last 6 months)
  const monthlyData = [
    { month: 'Oct', income: 6200, expenses: 2100 },
    { month: 'Nov', income: 7100, expenses: 2600 },
    { month: 'Dec', income: 6800, expenses: 3200 },
    { month: 'Jan', income: 7500, expenses: 2400 },
    { month: 'Feb', income: 7200, expenses: 2900 },
    { month: 'Mar', income: totalIncome, expenses: totalExpenses },
  ]

  return (
    <FinanceContext.Provider value={{
      transactions,
      addTransaction,
      deleteTransaction,
      totalIncome,
      totalExpenses,
      balance,
      categoryData,
      monthlyData,
      CATEGORIES,
      INCOME_CATEGORIES,
    }}>
      {children}
    </FinanceContext.Provider>
  )
}

export function useFinance() {
  const ctx = useContext(FinanceContext)
  if (!ctx) throw new Error('useFinance must be used within FinanceProvider')
  return ctx
}
