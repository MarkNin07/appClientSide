import { useState } from 'react'
import './App.css'
import StoreProvider from './state/StoreProvider'
import CategoryList from './components/CategoryList'
function App() {

  return (

    <StoreProvider>
      <h1>Please, don't make me cry</h1> 
      <CategoryList />     
    </StoreProvider>
  
  )
}

export default App
