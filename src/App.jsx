import './App.css'
import { ExpenseProvider } from './ExpenseContext';
import BonusForm from './components/BonusForm';

import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import IncomeForm from './components/IncomeForm';
// import './styles/styles.css';

const App = () => {
  return (
    <>
    <h1 className='center'>Enpense Tracker App</h1>
    <ExpenseProvider>
      <div>
        {/* <Header /> */}
        <IncomeForm />
        <BonusForm />
        <ExpenseForm />
        <ExpenseList />
      </div>
    </ExpenseProvider>
      </>
  );
};

export default App;




// by default react
// export default function App() {
//   return (
//     <main>
//       React ⚛️ + Vite ⚡ + Replit
//     </main>
//   )
// }
