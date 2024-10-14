import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-2">
      <div className="flex justify-between">
        <div>
          <p className="font-bold">{expense.name}</p>
          <p className="text-sm text-gray-600">{expense.category}</p>
        </div>
        <div>
          <p className="font-bold">{expense.amount.toFixed(2)} €</p>
          <p className="text-sm text-gray-600">{new Date(expense.date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
