import BalanceCard from "../components/Dashboard/Balance"
import IncomeExpense from "../components/Dashboard/IncomeExpense"
import TransactionList from "../components/Dashboard/TransactionList"
import AddTransaction from "../components/Dashboard/AddTransaction"

export default function Dashboard({
 transactions,
 income,
 expenses,
 balance,
 onAdd,
 onDelete,
}) {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <BalanceCard balance={balance} />
    
      <IncomeExpense income={income} expense={expenses} />

      <div className="grid gap-6 md:grid-cols-2">
        <TransactionList 
        transactions={transactions}
        onDelete={onDelete}
        />
        <AddTransaction onAdd={onAdd} />
      </div>
    </div>
  )
}