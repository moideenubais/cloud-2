import React, { useCallback, useEffect, useState } from "react";
import WasteItem from "./WasteItem";
import WasteBin from "./WasteBin";
import classes from "./WasteSeg.module.css";
import { E_Waste_ITEMS, WASTE_BINS } from "../../constants/wasteSeg";
import { DRY_ITEMS } from "../../constants/wasteSeg";
import { WasteItemType } from "./types";
import Modal from "../modal/Modal";

const WasteSeg: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [wasteBins, setWasteBins] = useState(WASTE_BINS);
  const [wasteItems, setWasteItems] = useState<WasteItemType[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [draggingItemType, setDraggingItemType] = useState("");
  const [loading, setLoading] = useState(true);

  const preloadImages = useCallback( async () => {
    const images = [await import(`../../static/wasteSeg/background.png`)];
    let imagesLoaded = 0;

    function imageLoaded() {
      imagesLoaded++;
      if (imagesLoaded === images.length) {
        setLoading(false);
      }
    }

    for (const bin of wasteBins) {
      images.push(
        await import(`../../static/wasteSeg/trash/${bin.imageOpened}.png`)
      );
      images.push(
        await import(`../../static/wasteSeg/trash/${bin.imageClosed}.png`)
      );
    }

    for (const image of images) {
      const img = new Image();
      img.onload = imageLoaded;
      img.onerror = imageLoaded;
      img.src = image.default;
    }

    // const dryClosed = require(`../../static/wasteSeg/trash/dryClosed.png`);
    // console.log("ttt ",backgroundImage,dryClosed)
    // const img = new Image();
    // const img2 = new Image();

    // img.src = backgroundImage;
    // img2.src = dryClosed
    // img2.onload = () =>{setLoading(false)}
  },[wasteBins]);
  

  useEffect(() => {
    const combinedArray = DRY_ITEMS.concat(E_Waste_ITEMS);
    setWasteItems(shuffleArray(combinedArray).slice(0, 10));

    preloadImages();
  }, [preloadImages]);

  // function preloadImages(imageUrls: any) {
  //   return new Promise((resolve, reject) => {
  //     const loadedImages: any = {};
  //     let imagesLoaded = 0;

  //     function imageLoaded() {
  //       imagesLoaded++;
  //       if (imagesLoaded === imageUrls.length) {
  //         resolve(loadedImages);
  //       }
  //     }

  //     for (const url of imageUrls) {
  //       const img = new Image();
  //       img.onload = imageLoaded;
  //       img.onerror = imageLoaded;
  //       img.src = url;

  //     }
  //   });
  // }



  const backgroundStyle = loading
    ? { background: "linear-gradient(45deg, #ff6699, #66ccff)" }
    : {};

  const handleOnDrop = (id: number) => {
    console.log("wasteItem", wasteItems, id);
    const updatedWasteItems = wasteItems.filter(
      (wasteItem) => wasteItem.id !== id
    );
    if (updatedWasteItems.length === 0) setShowModal(true);
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
    <div className={classes.gameContainer} style={backgroundStyle}>
      {loading ? (
        "Loading..."
      ) : (
        <>
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
                  images={wasteBin.images}
                  draggingItemType={draggingItemType}
                />
              );
            })}
          </div>
          <div className={classes.wasteBackground}>
            <div className={classes.wasteItemContainer}>
              {wasteItems.map((wasteItem) => {
                return (
                  <WasteItem
                    key={wasteItem.id}
                    url={wasteItem.image}
                    id={wasteItem.id}
                    type={wasteItem.type}
                    setDraggingItemType={setDraggingItemType}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}

      {showModal && <Modal message="Task Completed" />}
    </div>
  );
};

export default WasteSeg;
