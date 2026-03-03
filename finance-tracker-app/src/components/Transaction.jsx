import Transaction from "./Transaction"

export default function TransactionList({ transactions, onDelete }) {
  return (
    <ul>
      {transactions.map(tx => (
        <Transaction key={tx.id} transaction={tx} onDelete={onDelete} />
      ))}
    </ul>
  )
}