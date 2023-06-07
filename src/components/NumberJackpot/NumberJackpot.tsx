import React, { FC, useEffect, useState } from "react";
import { GAME_ROUNDS } from "../../constants/numberJackpot";
import classes from "./NumberJackpot.module.css";
import Modal from "../Modal/Modal";

interface NumberSet {
  numbers: number[];
  position: number;
  options: number[];
}

const NumberJackpot: FC = () => {
  const [numberSet, setNumberSet] = useState<NumberSet | null>(null);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function shuffleArray(array: number[]): number[] {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }
  function getRandomNumber(min: number, max: number): number {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;
    return randomNumber;
  }
  const generateNumberJackpot = () => {
    const startingNumber = getRandomNumber(1, 6);
    const numberArray: number[] = [];
    for (let number = startingNumber; number < startingNumber + 4; number++) {
      numberArray.push(number);
    }
    const position = getRandomNumber(0, 3);

    const optionsArray = [numberArray[position]];
    for (let i = 1; i <= 2; i++) {
      const randomNumber = getRandomNumber(1, 20);
      if (optionsArray.includes(randomNumber)) {
        i--;
        continue;
      }
      optionsArray.push(randomNumber);
    }
    setNumberSet({
      position: position,
      numbers: numberArray,
      options: shuffleArray(optionsArray),
    });
  };
  useEffect(() => {
    generateNumberJackpot();
  }, []);

  const handleSelection = (selected: number) => {
    if (selected === numberSet?.numbers[numberSet.position]) {
      const progress = Math.floor(((currentSetIndex + 1) * 100) / GAME_ROUNDS);
      console.log("correct selection");
      if (currentSetIndex === GAME_ROUNDS - 1) {
        setProgress(progress);
        setShowModal(true);
        return;
      }
      generateNumberJackpot();
      setCurrentSetIndex((prev) => prev + 1);
      setProgress(progress);
      return;
    }
    console.log("wrong selection");
  };

  return (
    <div className={classes.gameContainer}>
      <div className={classes.progressContainer}>
        <div
          className={classes.progressBar}
          style={{ height: `${progress}%` }}
        ></div>
      </div>
      <div className={classes.numberAndReset}>
        <div className={classes.numberContainer}>
          {numberSet?.numbers.map((number, index) => {
            const hiddenNumberColor =
              index === numberSet.position ? classes.questionColor : "";
            return (
              <div className={`${classes.numberBox} ${hiddenNumberColor}`}>
                {index === numberSet.position ? "?" : number}
              </div>
            );
          })}
        </div>
        <div className={classes.reset} onClick={generateNumberJackpot}>
          Try another
        </div>
      </div>
      <div className={classes.optionContainer}>
        {numberSet?.options.map((number) => {
          return (
            <div
              className={classes.optionBox}
              onClick={() => handleSelection(number)}
            >
              {number}
            </div>
          );
        })}
      </div>
      {showModal && <Modal message="Task Completed" />}
    </div>
  );
};

export default NumberJackpot;
