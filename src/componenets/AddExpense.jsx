import React, { useState } from 'react';

const AddExpense = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Alimentation');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && date) {
      onAddExpense({
        name,
        amount: parseFloat(amount),
        category,
        date,
        id: Date.now(),
      });
      setName('');
      setAmount('');
      setCategory('Alimentation');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Nom de la dépense"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          className="border p-2 rounded"
          placeholder="Montant"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Alimentation">Alimentation</option>
          <option value="Transport">Transport</option>
          <option value="Logement">Logement</option>
          <option value="Loisirs">Loisirs</option>
        </select>
        <input
          type="date"
          className="border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Ajouter
        </button>
      </div>
    </form>
  );
};

export default AddExpense;
