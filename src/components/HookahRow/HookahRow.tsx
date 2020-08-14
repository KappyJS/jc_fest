import React from "react";
import { ID, IRateOptions, RateType, validateRate } from "../../common";
import Rating from "@material-ui/lab/Rating";
import classes from "./HookahRow.module.css";

interface IProps {
  rate: RateType;
  name: string;
  id: ID;
  brand: string;
  onRateClick: (val: IRateOptions) => void;
}

const HookahRow: React.FC<IProps> = props => {
  const { name, brand, rate, id, onRateClick } = props;

  const rateClickHandler = (event: React.ChangeEvent, value: number | null) => {
    if (validateRate(value)) {
      onRateClick({ id, rate: value });
    }
  };

  return (
    <>
      <div className={classes.row}>
        <div className={classes.textGrid}>
          <span className={classes.prefix}>{brand[0] + brand[1]}</span>
          <span className={classes.text}>{name}</span>
        </div>

        <div>
          <Rating
              key={id}
              id={id}
            name={id}
            value={rate ?? 0}
            onChange={rateClickHandler}
          />
        </div>
      </div>
      <div className={classes.hr} />
    </>
  );
};

export default HookahRow;
