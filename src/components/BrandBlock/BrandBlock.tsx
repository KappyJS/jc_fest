import React from "react";
import classes from "./BrandBlock.module.css";
import { IRateOptions, ITobacco } from "../../common";
import { HookahRow } from "../";

interface IProps {
  title: string;
  onRateClick: (val: IRateOptions) => void;
  data: ITobacco[];
}

const BrandBlock: React.FC<IProps> = props => {
  const { title, data, onRateClick } = props;
  if (data.length === 0) {
    return null;
  }
  return (
    <div>
      <div className={classes.title}>
        <span>{title}</span>
      </div>
      <div>
        {data.map(({ id, name, rate }) => (
          <HookahRow
            key={id}
            name={name}
            rate={rate}
            brand={title}
            id={id}
            onRateClick={onRateClick}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandBlock;
