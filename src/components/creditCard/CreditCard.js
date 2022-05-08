import {FcSimCardChip} from "react-icons/fc"
import iconClasses from "../reactIcons/ChipIcon.module.css"

import classes from "./CreditCard.module.css"
const CreditCard = () => {
    return (
        <div className={classes.container} >
            <div className={`${classes.row} ${classes.chipbankcard}`} >
                <FcSimCardChip className={iconClasses.reacticons} />
                <p>BBVA</p>
            </div>
            <div className={`${classes.row} ${classes.numbercard}`} >
                <div>5420 1500 0555 9053</div>
            </div>
            <div className={`${classes.row} ${classes.namecard}`} >
            <div>name</div>
            <div>dateExp</div>
            </div>
        </div>
    )
}

export default CreditCard