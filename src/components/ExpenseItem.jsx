const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    <li className='desc income'>

      {expense.description} - ${expense.amount}
      <button onClick={() => deleteExpense(expense.id)}>Delete</button>
    </li>
  );
};

export default ExpenseItem;
