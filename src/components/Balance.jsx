import React from "react";

const Balance = ({ transactions }) => {
  const calculateBalance = () => {
    return transactions
      .reduce((acc, transaction) => acc + transaction.amount, 0)
      .toFixed(2);
  };

  const balance = calculateBalance();

  return (
    <div className="balance-container">
      <h2>Your Balance</h2>
      <p className="balance-amount">${balance}</p>
    </div>
  );
};

export default Balance;
