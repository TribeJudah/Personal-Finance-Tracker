import { useEffect, useState } from "react"
import Landing from "./pages/landing"
import Dashboard from "./pages/dashboard"

export default function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions")
    return saved ? JSON.parse(saved) : []
  })

  // Persist data
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  }, [transactions])

  // Add transaction
  const addTransaction = (transaction) => {
    setTransactions(prev => [transaction, ...prev])
  }

  // Delete transaction
  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(tx => tx.id !== id))
  }

  // Calculations
  const amounts = transactions.map(tx => tx.amount)
  const income = amounts.filter(a => a > 0).reduce((a, b) => a + b, 0)
  const expenses = amounts.filter(a => a < 0).reduce((a, b) => a + b, 0)
  const balance = income + expenses

  return (
    <>
    <Dashboard
      transactions={transactions}
      income={income}
      expenses={expenses}
      balance={balance}
      onAdd={addTransaction}
      onDelete={deleteTransaction}
    />
    </>
  )
}