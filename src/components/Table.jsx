import React from "react";

export default function Table({ expenses }) {
  return (
    <table style={{ width: "70vw" }}>
      <thead>
        <tr>
          <th>Expense</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        {/* Map through list of expenses and create a row in tablw */}
        {expenses.map((expense, i) => {
          return (
            <tr key={i}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}