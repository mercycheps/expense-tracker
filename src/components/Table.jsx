import React from "react";

export default function Table({ expenses, search,onDelete }) {
  const filteredExpenses = expenses
    .filter((expense) => expense.description.includes(search))
    .sort((a, b) => a.category.localeCompare(b.category));

   function Remove({id}){
       return(
      <button onClick={()=>onDelete(id)}>delete</button>
       )
   }
  

  return (
    <table style={{ width: "70vw" }}>
      <thead>
        <tr>
          <th>Expense</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {/* Map through list of expenses and create a row in tablw */}
        {filteredExpenses.map((expense, i) => {
          return (
            <tr key={i}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td><Remove id={expense.id}/></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
