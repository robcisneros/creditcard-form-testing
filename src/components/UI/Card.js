import CreditCard from "../creditCard/CreditCard"
import classes from "./Card.module.css"

const Card = () => {
    return (
        <div className={classes.container} >
            <CreditCard />
        </div>
    )
}

export default Card