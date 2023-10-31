import React, {useState} from 'react';
import './App.css'
import {
  FormGroup
} from './shared/forms'

import Expense, {suma} from './components/Expense'
import NewExpense from './layouts/NewExpense/NewExpense'
import Modal from './components/Modal/Modal';

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
      <h1>Manejador de gastos</h1>
      <NewExpense
        onNewExpense={handleNewExpense}
      />

      <FormGroup>
        <label
          htmlFor='filtro'>
          Busqueda
        </label>
        <input
          name='filtro'
          placeholder='Agrega un filtro'
          value={filtro}
          onChange={handleFiltroChange}
          />
      </FormGroup>
      
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
