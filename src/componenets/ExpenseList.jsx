import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="mt-4">
      {expenses.length > 0 ? (
        expenses.map((expense) => <ExpenseItem key={expense.id} expense={expense} />)
      ) : (
        <p>Aucune dépense enregistrée.</p>
      )}
    </div>
  );
};

export default ExpenseList;
