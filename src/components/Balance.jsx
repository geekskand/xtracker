import { useContext } from "react"
import { GlobalContext } from "../context/globalstate"

function Balance(){
    const {transactions}= useContext(GlobalContext)
    const amounts = transactions.map(t => Number(t.amount))
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    
return (
    <>
    <h1>Your Balamce</h1>
    <h1 id="balance" className={total < 0 ? 'negative' : 'positive'}>{total}</h1>
    </>
)
}

export default Balance