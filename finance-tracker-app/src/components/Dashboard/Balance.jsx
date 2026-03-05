export default function BalanceCard({ balance }) {
  return (
    <div className="bg-white shadow rounded-xl p-6 text-center">
      <p className="text-gray-500">Current Balance</p>
      <h2 className="text-3xl font-bold mt-2">
        € {balance.toFixed(2)}
      </h2>
    </div>
  )
}