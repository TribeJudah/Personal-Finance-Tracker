import TransactionList from "./TransactionList"

export default function TransactionList({ transactions, onDelete }) {
  const isIncome = transaction.amount > 0

  return (
    <ul>
      {transactions.map(tx => (
        <Transaction key={tx.id} transaction={tx} onDelete={onDelete} />
      
      ))}
    </ul>
  )
}