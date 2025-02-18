import { useState } from 'react'
import AddTransection from './components/AddTransecation.jsx'
import Balance from './components/Balance.jsx'
import Header from './components/Header.jsx'
import IncomeExpenses from './components/IncomeExpenses.jsx'
import History from './components/History.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import { GlobalProvider } from './context/globalstate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
    <Header/>
    <Balance/>
    <IncomeExpenses/>
    <History/>
     <AddTransection/>
     <Footer/>
    </GlobalProvider>
  )
}

export default App
