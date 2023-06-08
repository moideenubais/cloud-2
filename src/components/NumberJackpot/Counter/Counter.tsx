import React from "react";
import classes from "./Counter.module.css";
interface NumberSet {
  numbers: number[];
  position: number;
  options: number[];
}
interface CounterProps {
  numberCollection: NumberSet[];
}

const Counter: React.FC<CounterProps> = ({ numberCollection }) => {
  return (
    <div className={classes.numberContainer}>
      {numberCollection.map((coll,indexCol) => (
        <div key={indexCol} className={`${classes.numberCollContainer}`}>
          {coll?.numbers.map((number, index) => {
            const hiddenNumberColor =
              index === coll.position ? classes.questionColor : "";
            return (
              <div key={index} className={`${classes.numberBox} ${hiddenNumberColor}`}>
                {index === coll.position ? "?" : number}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Counter;
