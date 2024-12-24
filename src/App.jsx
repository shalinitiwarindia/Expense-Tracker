import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Chart from "./components/Chart";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  // Load transactions from localStorage on component mount
  useEffect(() => {
    const storedTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(storedTransactions);
  }, []);

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    if (transactions.length > 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredTransactions =
    filterCategory === "All"
      ? transactions
      : transactions.filter((t) => t.category === filterCategory);

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <Header />
      <DarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Balance transactions={transactions} />
      <Chart transactions={transactions} />
      <div className="form-control">
        <label>Filter by Category</label>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All</option>
          {["Salary", "Food", "Rent", "Entertainment", "Other"].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <AddTransaction addTransaction={addTransaction} />
      <TransactionList
        transactions={filteredTransactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default App;
