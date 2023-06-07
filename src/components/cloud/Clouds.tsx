import React, { useEffect, useState } from "react";
import classes from "./Cloud.module.css";
import { INITIAL_POSITIONS, NUMBER_OF_CLOUDS } from "../../constants/cloud";
import Modal from "../Modal/Modal";

interface Cloud {
  id: number;
  clicked: boolean; 
  validClick: boolean;
  animationDelay: string;
  top: number;
}

export const Clouds: React.FC = () => {
  const [clouds, setClouds] = useState<Cloud[]>([]);
  const [currentClick, setCurrentClick] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Generate initial clouds
    const generateClouds = () => {
      const numbers = [...Array(NUMBER_OF_CLOUDS)].map((_, index) => index);

      const shuffledArray = shuffleArray(
        numbers.map((number) => ({ id: number }))
      );

      for (let i = 0; i < NUMBER_OF_CLOUDS; i++) {
        const cloudData = {
          top: INITIAL_POSITIONS[i % INITIAL_POSITIONS.length].top,
          animationDelay: `${i * 2 - 8}s`,
          clicked: false,
          validClick: false,
        };
        shuffledArray[i] = { ...shuffledArray[i], ...cloudData };
      }

      setClouds(shuffledArray as Cloud[]);
    };
    generateClouds();
  }, []);

  useEffect(() => {
    if (currentClick === NUMBER_OF_CLOUDS) setShowModal(true);
  }, [currentClick]);

  const handleCloudClick = (cloud: Cloud) => {
    if (cloud.clicked && cloud.validClick) return;
    if (cloud.clicked) {
      setClouds((prevClouds: Cloud[]) => {
        return prevClouds.map((prevCloud: Cloud) =>
          prevCloud.id === cloud.id
            ? { ...prevCloud, validClick: false, clicked: false }
            : prevCloud
        );
      });
      return;
    }
    if (cloud.id === currentClick) {
      setClouds((prevClouds: Cloud[]) => {
        return prevClouds.map((prevCloud: Cloud) =>
          prevCloud.id === cloud.id
            ? { ...prevCloud, validClick: true, clicked: true }
            : prevCloud
        );
      });
      setCurrentClick((prev) => prev + 1);
    } else {
      setClouds((prevClouds: Cloud[]) => {
        return prevClouds.map((prevCloud: Cloud) =>
          prevCloud.id === cloud.id
            ? { ...prevCloud, validClick: false, clicked: true }
            : prevCloud
        );
      });
    }
  };

  const shuffleArray = (array: { id: number }[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div className={classes.sky}>
      {clouds?.map((cloud) => {
        let selectionImage = null;
        if (cloud.clicked) {
          selectionImage = cloud.validClick
            ? "./images/tick.png"
            : "./images/cross.png";
        }
        return (
          <div
            key={cloud.id}
            className={classes.cloud}
            style={{
              top: cloud.top,
              animationDelay: cloud.animationDelay,
            }}
            onClick={() => {
              handleCloudClick(cloud);
            }}
          >
            {selectionImage && (
              <img
                src={selectionImage}
                alt="selectionImage"
                className={classes.crossTick}
              />
            )}
            {cloud.id + 1}
          </div>
        );
      })}

      <div className={classes.circleContainer}>
        {Array.from({ length: 10 }, (_, index) => {
          const currentCloud = clouds.find(
            (cloud: Cloud) => cloud.id === index
          );
          return (
            <div
              key={index}
              className={`${classes.smallCircle} ${
                currentCloud && currentCloud.clicked && currentCloud.validClick
                  ? classes["bg-green"]
                  : ""
              }`}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
      {showModal && <Modal message="Task Completed" />}
    </div>
  );
};
