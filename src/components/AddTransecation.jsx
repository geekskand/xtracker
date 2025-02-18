import { useState } from "react"
import { ADD_TRANSACTION } from "../context/globalstate"

function AddTransection(){


    const [item, setItem] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        ADD_TRANSACTION({item, amount, date})
        
        console.log(item, amount, date)
    }

    return(
        <>
        <h3>Add New Transection</h3>
        <div className="list">
        <label>Item</label>
        <input type="text" placeholder="item" value={item} onChange={(e) => setItem(e.target.value)} ></input>
        <label >Amount</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="amount" ></input>
        <label >Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="date" ></input>
        <button type="submit" onClick={handleSubmit}>Add Transection</button>
        </div></>
    )
}

export default AddTransection