import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import AddExpense from "./AddExpense";
import SearchBar from "./components/searchbar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");

  const saveExpense = (expense) => {
    setExpenses(expenses.concat([expense]));
    console.log(expenses);
  };

  const deleteExpense = (id)=> {
  console.log("Deleting"+ id);
  setExpenses((Expenses)=>Expenses.filter((expense)=>expense.id !== id));
  }



  return (
    <div>
      <div style={{ left: "3px", top: "0px", textAlign: "left" }}>
        <h2>Expense Tracker</h2>
        <p style={{ colo: "grey", width: "400px" }}>
          Start taking control of your finances and life. Record,categorize and
          analyze your spending.
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <AddExpense saveExpense={saveExpense} />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <SearchBar searchTerm={search} onSearchChange={setSearch} />
          <Table search={search} expenses={expenses} onDelete={deleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
