import React, { useState } from 'react';
import AddExpense from '../componenets/AddExpense';
import ExpenseList from '../componenets/ExpenseList';

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Suivi des Dépenses</h1>
      <AddExpense onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Home;
