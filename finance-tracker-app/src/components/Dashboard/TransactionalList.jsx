import Transaction from "./Transaction"

export default function TransactionList({ transactions, onDelete }) {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h3 className="font-semibold mb-3">Transaction History</h3>

      <ul className="space-y-2 max-h-64 overflow-y-auto">
        {transactions.map(tx => (

          <li
            key={tx.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <span>{tx.text}</span>
            <span className={tx.amount > 0 ? "text-green-600" : "text-red-600"}>
              {tx.amount > 0 ? "+" : "-"}€{Math.abs(tx.amount)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}