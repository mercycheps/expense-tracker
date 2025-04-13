import React, { useState } from "react";

export default function AddExpense() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  function createNewExpense(){
    console.log({
      name,
      description,
      category, amount, date
    })
  }

  return (
    <div style={{maxWidth: "300px"}}>
      <label for="fname">Add Expense</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label for="lname">Last Name</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label for="country">Country</label>
      <select id="country" name="country">
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
      </select>

      <button onClick={createNewExpense}> Submit </button>
    </div>
  );
}
