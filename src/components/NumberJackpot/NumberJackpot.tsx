import React, { FC, useCallback, useEffect, useState } from "react";
import { GAME_ROUNDS } from "../../constants/numberJackpot";
import classes from "./NumberJackpot.module.css";
import Modal from "../modal/Modal";

interface NumberSet {
  numbers: number[];
  position: number;
  options: number[];
}

const NumberJackpot: FC = () => {
  const [numberSet, setNumberSet] = useState<NumberSet | null>(null);
  const [currentGameRound, setCurrentGameRound] = useState(1);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [numberCollection, setNumberCollection] = useState<NumberSet[]>([]);
  const [animateScroll, setAnimateScroll] = useState(false);
  const [flashScreen, setFlashScreen] = useState(true);

  console.log("number", numberSet);

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
  const generateNumberJackpot = useCallback(() => {
    const numberSetArray: NumberSet[] = [];
    for (let i = 0; i < 10; i++) {
      const startingNumber = getRandomNumber(1, 6);
      const numberArray: number[] = [];
      for (let number = startingNumber; number < startingNumber + 4; number++) {
        numberArray.push(number);
      }
      const position = getRandomNumber(0, 3);

      const existsAlready = numberSetArray.find((jackpot) => {
        return (
          jackpot.position === position && jackpot.numbers[0] === numberArray[0]
        );
      });
      if (existsAlready) {
        i--;
        continue;
      }

      const optionsArray = [numberArray[position]];
      for (let i = 1; i <= 2; i++) {
        const randomNumber = getRandomNumber(1, 20);
        if (optionsArray.includes(randomNumber)) {
          i--;
          continue;
        }
        optionsArray.push(randomNumber);
      }
      numberSetArray.push({
        position: position,
        numbers: numberArray,
        options: shuffleArray(optionsArray),
      });
    }
    setNumberCollection(numberSetArray);
    setAnimateScroll(true);
    setTimeout(() => {
      setNumberSet(numberSetArray[0]);
    }, 2000);
  }, []);
  useEffect(() => {
    generateNumberJackpot();
    const flashTimout = setTimeout(() => {
      setFlashScreen(false);
    }, 1500);

    return () => {
      clearTimeout(flashTimout);
    };
  }, [generateNumberJackpot]);

  useEffect(() => {
    // if (animateScroll) {
    //   const timer = setTimeout(() => {
    //     setAnimateScroll(false);
    //   }, 2000);
    //   return () => {
    //     clearTimeout(timer);
    //   };
    // }
  }, [animateScroll]);

  const handleSelection = (selected: number) => {
    if (selected === numberSet?.numbers[numberSet.position]) {
      const progress = Math.floor((currentGameRound * 100) / GAME_ROUNDS);
      console.log("correct selection");
      if (currentGameRound === GAME_ROUNDS) {
        setProgress(progress);
        setShowModal(true);
        return;
      }
      generateNumberJackpot();
      setCurrentGameRound((prev) => prev + 1);
      setProgress(progress);
      setNumberSet(null);
      setAnimateScroll(true);
      return;
    }
    console.log("wrong selection");
  };

  return (
    <div className={classes.container}>
      {!flashScreen ? (
        <div className={classes.gameContainer}>
          <div className={classes.progressContainer}>
            <div
              className={classes.progressBar}
              style={{ height: `${progress}%` }}
            ></div>
          </div>
          <div 
          style={{backgroundImage:!animateScroll?'url(./images/numberJackpot/robotOpen.png)':'url(./images/numberJackpot/robotClosed.png)'}}
           className={classes.numberAndReset}>
            {/* <div className={classes.numberContainer}>
          {numberSet?.numbers.map((number, index) => {
            const hiddenNumberColor =
              index === numberSet.position ? classes.questionColor : "";
            return (
              <div className={`${classes.numberBox} ${hiddenNumberColor}`}>
                {index === numberSet.position ? "?" : number}
              </div>
            );
          })}
        </div> */}
            <div className={classes.numberContainer}>
              {numberCollection.map((coll) => (
                <div className={`${classes.numberCollContainer}`}>
                  {coll?.numbers.map((number, index) => {
                    const hiddenNumberColor =
                      index === coll.position ? classes.questionColor : "";
                    return (
                      <div
                        className={`${
                          classes.numberBox
                        } ${hiddenNumberColor}  ${
                          animateScroll ? classes.scrollAnimation : ""
                        }`}
                        onAnimationEnd={() => {
                          setAnimateScroll(false);
                        }}
                      >
                        {index === coll.position ? "?" : number}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
            <div
              className={classes.reset}
              onClick={generateNumberJackpot}
            ></div>
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
      ) : (
        <img
          className={classes.titleImage}
          src="./images/numberJackpot/title.png"
        />
      )}
    </div>
  );
};

export default NumberJackpot;
