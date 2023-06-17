import React, { FC, useCallback, useEffect, useState } from "react";
import { GAME_ROUNDS } from "../../constants/numberJackpot";
import classes from "./NumberJackpot.module.css";
import Modal from "../modal/Modal";
import ImagePreloader from "../ImagePreloader";

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
  const [splashScreen, setSplashScreen] = useState(true);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);

  useEffect(() => {
    preloadImages();
  }, []);

  const preloadImages = async () => {
    const imageFilenames = [
      "NumberBG",
      "robotClosed",
      "robotOpen",
      "Space",
      "title",
    ];
    const promises = imageFilenames.map((filename) =>
      import(`../../../public/images/numberJackpot/${filename}.png`).then(
        (module) => module.default
      )
    );

    try {
      const imagePaths = await Promise.all(promises);
      setPreloadedImages(imagePaths);
      setImagesLoaded(true);
    } catch (error) {
      console.error("Error preloading images:", error);
    }
  };

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
    const splashTimout = setTimeout(() => {
      setSplashScreen(false);
    }, 1500);

    return () => {
      clearTimeout(splashTimout);
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
      {!splashScreen && imagesLoaded ? (
        <ImagePreloader images={preloadedImages}>
          <div className={classes.gameContainer}>
            <div className={classes.progressContainer}>
              <div
                className={classes.progressBar}
                style={{ height: `${progress}%` }}
              ></div>
            </div>
            <div
              style={{
                backgroundImage: !animateScroll
                  ? "url(./images/numberJackpot/robotOpen.png)"
                  : "url(./images/numberJackpot/robotClosed.png)",
              }}
              className={classes.numberAndReset}
            >
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
                {numberCollection.map((coll, collIndex) => (
                  <div
                    key={collIndex}
                    className={`${classes.numberCollContainer}`}
                  >
                    {coll?.numbers.map((number, numberIndex) => {
                      const hiddenNumberColor =
                        numberIndex === coll.position
                          ? classes.questionColor
                          : "";
                      return (
                        <div
                          key={numberIndex}
                          className={`${
                            classes.numberBox
                          } ${hiddenNumberColor}  ${
                            animateScroll ? classes.scrollAnimation : ""
                          }`}
                          onAnimationEnd={() => {
                            setAnimateScroll(false);
                          }}
                        >
                          {numberIndex === coll.position ? "?" : number}
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
              {numberSet?.options.map((number, optionIndex) => {
                return (
                  <div
                    key={optionIndex}
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
        </ImagePreloader>
      ) : (
        <img
          className={classes.titleImage}
          src="./images/numberJackpot/title.png"
          alt="title"
        />
      )}
    </div>
  );
};

export default NumberJackpot;
