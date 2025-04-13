import React, { useState } from "react";

export default function AddExpense({saveExpense}) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  function createNewExpense(){
    
    saveExpense({
      name,
      description,
      category, amount, date
    })
  }

  return (
    <div style={{maxWidth: "300px"}}>
      <label>Add Expense</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label >Last Name</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>Country</label>
      <select name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>

      <button onClick={createNewExpense}> Submit </button>
    </div>
  );
}
