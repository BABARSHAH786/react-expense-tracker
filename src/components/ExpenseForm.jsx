import { useState } from 'react';
import { useExpenses } from '../ExpenseContext';

const ExpenseForm = () => {
  const { addExpense } = useExpenses(); // Access addExpense function from context
  const [expense, setExpense] = useState({ description: '', amount: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.description && expense.amount) {
      addExpense(expense);
      setExpense({ description: '', amount: '' }); // Reset form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
       <h3 className='income'>Enter Detail about in which item you spend money</h3>
      <input
        type="text"
        name="description"
        placeholder="Expense Description"
        value={expense.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={expense.amount}
        onChange={handleChange}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
