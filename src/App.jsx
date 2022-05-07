import { useState } from 'react'
import './App.css'
import StoreProvider from './state/StoreProvider'
import CategoryList from './components/CategoryList'
import CategoryForm from './components/CategoryForm'
function App() {

  return (
    <div>
      <StoreProvider>
        <CategoryForm />
        <CategoryList />     
    </StoreProvider>
    </div>

  
  )
}

export default App
