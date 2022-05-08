import CreditCard from "../creditCard/CreditCard"
import BasicForm from "../BasicForm"

import classes from "./Card.module.css"
import { useState } from "react"

const Card = () => {
    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [date,setDate] = useState('');
    const [cvv,setcvv] = useState('');

    const bindingName = (data) => {
        setName(data.fullname)
        setNumber(data.numbercard)
        setDate(data.dateexp)
        setcvv(data.cvv)
    }
    
    return (
        <div className={classes.container} >
            <CreditCard theName={name} theNumber={number} theDate={date} thecvv={cvv} />
            <BasicForm exportData={bindingName} />
        </div>
    )
}

export default Card