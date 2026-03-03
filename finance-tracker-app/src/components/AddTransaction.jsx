import { useState } from "react"

export default function AddTransaction({ onAdd }) {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    onAdd({
      id: Date.now(),
      text,
      amount: +amount,
    })

    setText("")
    setAmount("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input/>
      <input/>
      <button>Add Transaction</button>
    </form>
  )
}