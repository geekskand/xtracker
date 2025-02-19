import { useState ,useContext } from "react"
import { GlobalContext } from "../context/globalstate"

function AddTransection(){
    const {add} = useContext(GlobalContext)


    const [item, setItem] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        add({id: Math.floor(Math.random() * 1000000),item, amount, date})
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
        <label className="spent-received">
  <input type="checkbox"  onChange={(e) => setAmount(e.target.checked ? -amount : amount)}></input>
  <span className="slider"></span>
</label>

 
        <label >Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="date" ></input>
        <button type="submit" onClick={handleSubmit}>Add Transection</button>
        </div></>
    )
}

export default AddTransection