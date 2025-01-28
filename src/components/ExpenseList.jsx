import { useExpenses } from '../ExpenseContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { expenses, deleteExpense, remainingBalance } = useExpenses(); // Access remainingBalance from context

  return (
    <div>
      <h2 className='incomes'>Remaining Balance: ${remainingBalance}</h2> {/* Show the updated remaining balance */}
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
