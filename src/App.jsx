import './App.css'

import Expense, {suma} from './components/Expense'
import NewExpense from './layouts/NewExpense'

function App() {

  return (
    <>
      <NewExpense/>
      <Expense
          fecha={new Date(2023, 9, 17)}
          titulo={'Libros'}
          precio={250}>
          Esto es un texto adicional
        </Expense>
      <Expense fecha={new Date(2023, 9, 15)} titulo={'Cult of the lamb'} precio={150}>
        
      </Expense>
      <Expense fecha={new Date(2023, 9, 16)} titulo={'Jordan zoom 2'} precio={1000}/>
    </>
  )
}

export default App
