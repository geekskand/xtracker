import { useContext } from "react"
import { GlobalContext } from "../context/globalstate"

function IncomeExpenses(){
    const {transactions} = useContext(GlobalContext)
    const Amount = transactions.map(t => t.amount)
    const Income = Amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
    const Expense = Amount.filter(item => item <0).reduce((acc, item) => (acc += item),0).toFixed(2)
  


    return(
        <>
        <div className="listitem">
            <div className="list">
                <h1>Income</h1>
                <h1>2{Income}</h1>
            </div >
            <div className="list">
                <h1>Expenses</h1>
                <h1>{Expense}</h1>
            </div>
        </div>
        
        </>
    )
}
export default IncomeExpenses