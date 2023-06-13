import React, { useEffect, useState } from "react";
import WasteItem from "./WasteItem";
import WasteBin from "./WasteBin";
import classes from "./WasteSeg.module.css";
import { WASTE_BINS } from "../../constants/wasteSeg";
import { DRY_iTEMS } from "../../constants/wasteSeg";
import { WET_iTEMS } from "../../constants/wasteSeg";
import { WasteItemType } from "./types";

const WasteSeg: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [wasteBins, setWasteBins] = useState(WASTE_BINS);
  const [wasteItems, setWasteItems] = useState<WasteItemType[]>([]);

  useEffect(() => {
    const combinedArray = DRY_iTEMS.concat(WET_iTEMS);
    setWasteItems(shuffleArray(combinedArray));
  }, []);

  const handleOnDrop = (id: number) => {
    console.log("wasteItem", wasteItems, id);
    const updatedWasteItems = wasteItems.filter(
      (wasteItem) => wasteItem.id !== id
    );
    setWasteItems(updatedWasteItems);
  };

  const shuffleArray = (array: WasteItemType[]) => {
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
    <div className={classes.gameContainer}>
      <div className={classes.wasteBinContainer}>
        {wasteBins.map((wasteBin) => {
          return (
            <WasteBin
              key={wasteBin.id}
              type={wasteBin.type}
              id={wasteBin.id}
              imageOpened={wasteBin.imageOpened}
              imageClosed={wasteBin.imageClosed}
              onDrop={handleOnDrop}
            />
          );
        })}
      </div>
      <div className={classes.wasteItemContainer}>
        {wasteItems.map((wasteItem) => {
          return (
            <WasteItem
              key={wasteItem.id}
              url={wasteItem.image}
              id={wasteItem.id}
              type={wasteItem.type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WasteSeg;
