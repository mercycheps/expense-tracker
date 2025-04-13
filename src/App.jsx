import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./components/Table";
import AddExpense from "./AddExpense";
import SearchBar from "./components/searchbar";

function App() {
  const [count, setCount] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const saveExpense = (expense) => {
    setExpenses(expenses.concat([expense]));
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <AddExpense saveExpense={saveExpense} />
      </div>
      <div>
        <SearchBar />
        <Table expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
