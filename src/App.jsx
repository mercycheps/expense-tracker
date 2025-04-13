import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./components/Table";
import AddExpense from "./AddExpense";
import SearchBar from "./components/searchbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <AddExpense />
      </div>
      <div>
        <SearchBar />
        <Table />
      </div>
    </div>
  );
}

export default App;
