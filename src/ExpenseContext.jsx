import { createContext, useState, useContext } from 'react';

// Create the Context
const ExpenseContext = createContext();

// Create a provider component
export const ExpenseProvider = ({ children }) => {
  const [income, setIncome] = useState(0); // Initial income
  const [bonus, setBonus] = useState(0); // New state to track bonus income
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const updateIncome = (newIncome) => {
    setIncome(newIncome);
  };

  const updateBonus = (newBonus) => {
    setBonus(newBonus); // Update the bonus value
  };

  // Calculate the remaining balance (income + bonus - total expenses)
  const remainingBalance = income + bonus - expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);

  return (
    <ExpenseContext.Provider
      value={{
        income,
        bonus,
        expenses,
        addExpense,
        deleteExpense,
        updateIncome,
        updateBonus,
        remainingBalance,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

// Custom hook to use the ExpenseContext
export const useExpenses = () => {
  return useContext(ExpenseContext);
};







// working code
// import { createContext, useState, useContext } from 'react';

// // Create the Context
// const ExpenseContext = createContext();

// // Create a provider component
// export const ExpenseProvider = ({ children }) => {
//   const [expenses, setExpenses] = useState([]);

//   const addExpense = (expense) => {
//     const newExpense = { ...expense, id: Date.now() };
//     setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
//   };

//   const deleteExpense = (id) => {
//     setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
//   };

//   return (
//     <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
//       {children}
//     </ExpenseContext.Provider>
//   );
// };

// // Custom hook to use the ExpenseContext
// export const useExpenses = () => {
//   return useContext(ExpenseContext);
// };
