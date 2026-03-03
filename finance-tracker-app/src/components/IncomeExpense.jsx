export default function IncomeExpenses() {
  return (
    <div className="flex justify-between bg-white shadow p-4 rounded mb-4">
      <div>
        <h4>Income</h4>
        <p className="text-green-500">+$0.00</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="text-red-500">-$0.00</p>
      </div>
    </div>
  )
}