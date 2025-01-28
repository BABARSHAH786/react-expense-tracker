import { useState } from 'react';
import { useExpenses } from '../ExpenseContext';

const BonusForm = () => {
  const { updateBonus } = useExpenses(); // Access updateBonus from context
  const [bonus, setBonus] = useState('');

  const handleChange = (e) => {
    setBonus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bonus) {
      updateBonus(Number(bonus)); // Update bonus value
      setBonus('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
       <label className='income'htmlFor="income">Please Enter Bonus  or add money in your balance</label>
      <input
        type="number"
        placeholder="Enter Bonus"
        value={bonus}
        onChange={handleChange}
      />
      <button type="submit">Add Bonus</button>
    </form>
  );
};

export default BonusForm;
