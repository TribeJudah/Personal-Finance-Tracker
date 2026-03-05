import { useState } from "react"

export default function AddTransaction({ onAdd }) {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => {
 e.preventDefault()

if (!text || !amount) return

    onAdd({
      id: Date.now(),
      text,
      amount: +amount,
      category,
    })

    setText("")
    setAmount("")
    setCategory("")
  }

  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h3 className="font-semibold mb-3">Add Transaction</h3>

      <form className="space-y-3">
        <input
          type="text"
          placeholder="Item Name"
          className="w-full border rounded p-2"
        />

        <input
          type="number"
          placeholder="Amount (e.g. -150 for expenses)"
          className="w-full border rounded p-2"
        />

        <select className="w-full border rounded p-2">
          <option>Category</option>
          <option>Food</option>
          <option>Salary</option>
          <option>Bills</option>
        </select>

        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded">
          Add Transaction
        </button>
      </form>
    </div>
  )
}