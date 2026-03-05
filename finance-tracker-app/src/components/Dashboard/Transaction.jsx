import transaction from "./TransactionList"

export default function Transaction({ transactions, onDelete }) {
  const isIncome = transaction.amount > 0

  return (
    <ul>
      {transactions.map(tx => (
        <Transaction key={tx.id} transaction={tx} onDelete={onDelete} />
      
      ))}
    </ul>
  )
}