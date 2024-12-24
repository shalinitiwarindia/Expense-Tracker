import React, { useState } from "react";

const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Salary");
  const [date, setDate] = useState("");

  const categories = ["Salary", "Food", "Rent", "Entertainment", "Other"];

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !amount || !date) {
      alert("Please fill in all fields");
      return;
    }

    const newTransaction = {
      id: Math.random(),
      text,
      amount: parseFloat(amount),
      category,
      date,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
    setCategory("Salary");
    setDate("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter description"
        />
      </div>
      <div className="form-control">
        <label>Amount (negative for expense, positive for income)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <div className="form-control">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button className="btn">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
