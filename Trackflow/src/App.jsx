import React from 'react'
import { TransactionProvider } from './Context/TransactionContext'
import Index from './Components/Index'

const App = () => {
  return (
    <TransactionProvider>
      <Index/>
    </TransactionProvider>
  )
}

export default App