import './App.css'

import Expense, {suma} from './components/Expense'

function App() {

  return (
    <>
      <Expense fecha={new Date(2023, 9, 17)} titulo={'Libros'} precio={250}/>
      <Expense fecha={new Date(2023, 9, 15)} titulo={'Cult of the lamb'} precio={150}/>
      <Expense fecha={new Date(2023, 9, 16)} titulo={'Jordan zoom 2'} precio={1000}/>
    </>
  )
}

export default App
