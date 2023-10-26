import React, {useState} from 'react';
import './App.css'

import Expense, {suma} from './components/Expense'
import NewExpense from './layouts/NewExpense'

function App() {
  const [expenses, setExpenses] = useState(
    [
      {
        fecha: new Date(2023, 9, 17),
        titulo: 'Libros',
        precio: 5000
      }, {
        fecha: new Date(2023, 9, 15),
        titulo: 'Cult of the lamb',
        precio: 300
      }
    ]
  )

  function handleNewExpense(expense) {
    setExpenses(
      [...expenses, expense]
    )
  }

  return (
    <>
      <NewExpense
        onNewExpense={handleNewExpense}
      />

      {expenses.map((expense) => (
        <Expense
          key={expense.title}
          fecha={expense.fecha}
          titulo={expense.titulo}
          precio={expense.precio}/>
      ))}
    </>
  )
}

export default App
