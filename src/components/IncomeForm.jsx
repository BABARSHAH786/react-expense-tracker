import { useState } from 'react';
import { useExpenses } from '../ExpenseContext';

const IncomeForm = () => {
  const { updateIncome } = useExpenses(); // Access updateIncome from context
  const [income, setIncome] = useState('');

  const handleChange = (e) => {
    setIncome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (income) {
      updateIncome(Number(income)); // Set the income value
      setIncome('');
    }
  };

  return (
    <form className='income' onSubmit={handleSubmit}>
      <label htmlFor="income">Please Enter Your Monthly Income</label>
      <input
        type="number"
        placeholder="Enter Your Income"
        value={income}
        onChange={handleChange}
      />
      <button type="submit">Set Income</button>
    </form>
  );
};

export default IncomeForm;
