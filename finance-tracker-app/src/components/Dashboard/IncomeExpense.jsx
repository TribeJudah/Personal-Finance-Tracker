export default function IncomeExpenses({ income, expense }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      
      <div className="bg-green-500 text-white p-5 rounded-xl">
        <p className="text-sm">Income</p>
        <h3 className="text-xl font-bold">
          € {income.toFixed(2)}
        </h3>
      </div>

      <div className="bg-red-500 text-white p-5 rounded-xl">
        <p className="text-sm">Expenses</p>
        <h3 className="text-xl font-bold">
          € {Math.abs(expense).toFixed(2)}
        </h3>
      </div>

    </div>
  )
}