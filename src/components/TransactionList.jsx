import React from "react";

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <ul className="list">
      {transactions.map((transaction) => (
        <li
          key={transaction.id}
          className={transaction.amount < 0 ? "minus" : "plus"}
        >
          {transaction.text} <span>{transaction.amount} USD</span>
          <span>({transaction.category})</span>
          <span>{new Date(transaction.date).toLocaleDateString()}</span>
          <button
            onClick={() => deleteTransaction(transaction.id)}
            className="delete-btn"
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
