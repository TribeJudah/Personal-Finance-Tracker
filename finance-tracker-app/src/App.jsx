import { useState } from 'react'
import Header from "./components/Header"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (transaction) => {
    setTransactions([... transactions, transaction])
  }
  <AddTransaction onAdd={addTransaction} />

  { id: 1, text; "Salary", amount; 500 }

const amounts = transactions.map(t => t.amount)

const income = amounts
  .filter(a => a > 0)
  .reduce((acc, a) => acc + a, 0)

const expense = amounts
  .filter(a => a < 0)
  .reduce((acc, a) => acc + a, 0)

const balance = income + expense

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-3xl font-bold">Personal Finance Tracker</h1>

      <div className="max-w-md mx-auto p-4">
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      </div>
    </div>

  )
}

export default App
