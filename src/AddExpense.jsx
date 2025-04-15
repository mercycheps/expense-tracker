import React, { useState } from "react";
import "./AddExpense.css"
export default function AddExpense({ saveExpense }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [id, setid] = useState(Date.now());

  function createNewExpense() {
    const result = saveExpense({
      id,
      name,
      description,
      category,
      amount,
      date,
    });

    if(result) {

      setAmount('')
      setCategory('')
      setDescription('')
      setName('')
      setDate('')
      setid(Date.now)
    }

  }

  return (
    <div className="myform" style={{ minWidth: "20vw" }}>
      <h2>Add expense</h2>
      <p>Enter your expenses below</p>
      
      <input
        type="text"
        value={name}
        placeholder="Expense Name"
        onChange={(e) => setName(e.target.value)}
      />

      
      <input
        type="text"
        value={description}
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />

      
      <input
        type="text"
        value={category}
        placeholder="category"
        onChange={(e) => setCategory(e.target.value)}
      />

      
      <input
        type="number"
        value={amount}
        placeholder="amount"
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
