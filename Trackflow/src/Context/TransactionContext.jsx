// TransactionContext.jsx
import React, { createContext, useState, useContext } from 'react';

const TransactionContext = createContext();

// Custom hook to use the TransactionContext
export const useTransaction = () => {
  return useContext(TransactionContext);
};

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransaction] = useState([
    { id: 1, text: 'Cash', amount: 700 },
    { id: 2, text: 'Book', amount: -40 },
    { id: 3, text: 'Camera', amount: -200 },
  ]);

  const addTransaction = (text, amount) => {
    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
    };
    setTransaction([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    setTransaction(transactions.filter((t) => t.id !== id));
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
