import { FcSimCardChip } from "react-icons/fc";
import iconClasses from "../reactIcons/ChipIcon.module.css";

import classes from "./CreditCard.module.css";
import { useSelector } from "react-redux";

const CreditCard = (props) => {
  const itemFocus = useSelector((state) => state.focus.focusItem);

  return (
    <div className={classes.container}>
      <div className={`${classes.row} ${classes.chipbankcard}`}>
        <FcSimCardChip className={iconClasses.reacticons} />
        <span> bbva </span>
      </div>
      <div className={`${classes.row} ${classes.numbercard} ${itemFocus === "numberCard" ? classes.onfocus : ""}`}>
        <span> {props.theNumber} </span>
      </div>
      <div className={`${classes.row} ${classes.namecard} ${itemFocus === "fullname" ? classes.onfocus : ""}`}>
        <span> {props.theName} </span>
      </div>
      <div className={`${classes.row} ${classes.expcvv}`}>
        <span className={`${classes.dateExp} ${itemFocus === "dateExp" ? classes.onfocus : ""}`} > {props.theDate} </span>
        <span className={`${classes.dateExp} ${itemFocus === "cvv" ? classes.onfocus : ""}`} > *** </span>
      </div>
    </div>
  );
};

export default CreditCard;
