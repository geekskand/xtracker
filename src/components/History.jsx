import { GlobalContext } from "../context/globalstate"
import { useContext } from "react"
function History(){
    const {transactions} = useContext(GlobalContext)
    console.log(transactions)
    return(
        <>
        <h3>Transaction History</h3>
            <div className="table-container">
                <table className="history-table">
                    {/* Table Header */}
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    
                    {/* Table Body */}
                    <tbody>
                        {transactions.length > 0 ? (
                            transactions.map((t) => (
                                <tr key={t.id}  className={t.amount > 0 ? 'positive' : 'negative'}>
                                    <td>{t.item}</td>
                                    <td>{t.amount}</td>
                                    <td>{t.date}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No transaction history available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        
        </>
    )
}
export default History