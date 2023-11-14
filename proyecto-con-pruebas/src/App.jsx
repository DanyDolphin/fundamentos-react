import React, { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('');

  return (
    <>
      <h1>{title}</h1>
      <input
        placeholder='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
    </>
  )
}

export default App
