import React from "react";

export default function Table({expenses}) {
  return (
    <table style={{ width: "70vw" }}>
      <thead>
        <tr>
          <th>Expense</th>
          <th>Description</th>
        </tr>
      </thead>

      <tbody>
        {
          expenses.map((expense)=>{
            return(
              <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
            </tr>
            )
          })
        }
        
      
      </tbody>
    </table>
  );
}
