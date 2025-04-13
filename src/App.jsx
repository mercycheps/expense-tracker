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
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <AddExpense saveExpense={saveExpense} />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <SearchBar searchTerm={search} onSearchChange={setSearch} />
        <Table search={search} expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
