import { useState } from 'react'
import './App.css'
import StoreProvider from './state/StoreProvider'
function App() {

  return (

    <StoreProvider>
      <h1>Please, don't make me cry</h1>      
    </StoreProvider>
  
  )
}

export default App
