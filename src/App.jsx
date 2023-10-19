import './App.css'

import Expense from './components/Expense'

function App() {

  return (
    <>
      <Expense fecha={'17 octubre 2023'} titulo={'Libros'} precio={250}/>
      <Expense fecha={'15 octubre 2023'} titulo={'Cult of the lamb'} precio={150}/>
      <Expense fecha={'16 octubre 2023'} titulo={'Jordan zoom 2'} precio={1000}/>
    </>
  )
}

export default App
