import BalanceCard from "../components/dashboard/BalanceCard"
import IncomeExpenses from "../components/dashboard/IncomeExpenses"
import TransactionList from "../components/dashboard/TransactionList"
import AddTransaction from "../components/dashboard/AddTransaction"

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
    
      <IncomeExpenses income={income} expense={expenses} />

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