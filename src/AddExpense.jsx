import React, { useState } from "react";

export default function AddExpense({ saveExpense }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function createNewExpense() {
    saveExpense({
      name,
      description,
      category,
      amount,
      date,
    });

    setAmount('')
    setCategory('')
    setDescription('')
    setName('')
    setDate('')
  }

  return (
    <div style={{ minWidth: "20vw" }}>
      <label>Expense Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Description </label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>Category </label>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <label>Amount</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label> Date </label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      /><br/>

      <button onClick={createNewExpense}> Submit </button>
    </div>
  );
}
