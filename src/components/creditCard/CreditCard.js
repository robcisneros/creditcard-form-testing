import { FcSimCardChip } from "react-icons/fc";
import iconClasses from "../reactIcons/ChipIcon.module.css";

import classes from "./CreditCard.module.css";
const CreditCard = (props) => {
  return (
    <div className={classes.container}>
      <div className={`${classes.row} ${classes.chipbankcard}`}>
        <FcSimCardChip className={iconClasses.reacticons} />
        <p>BBVA</p>
      </div>
      <div className={`${classes.row} ${classes.numbercard}`}>
        <span> {props.theNumber} </span>
      </div>
      <div className={`${classes.row} ${classes.namecard}`}>
        <span> {props.theName} </span>
      </div>
      <div className={`${classes.row} ${classes.expcvv}`}>
        <span> {props.theDate} </span>
        <span> *** </span>
      </div>
    </div>
  );
};

export default CreditCard;
