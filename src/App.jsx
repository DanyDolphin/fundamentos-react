import React, {useState} from 'react';
import './App.css'

import Expense, {suma} from './components/Expense'
import NewExpense from './layouts/NewExpense'

function App() {
  const [filtro, setFiltro] = useState('')
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

  function handleFiltroChange(event) {
    setFiltro(event.target.value)
  }

  return (
    <>
      <NewExpense
        onNewExpense={handleNewExpense}
      />
      <input
        placeholder='Agrega un filtro'
        value={filtro}
        onChange={handleFiltroChange}
        />

      {expenses
        .filter((expense) => expense.titulo.includes(filtro))
        .map((expense) => (
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
