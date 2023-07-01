import React, { useCallback, useEffect, useState } from "react";
import classes from "./WasteBin.module.css";
import { useDrop } from "react-dnd";
import { BinType, ImageVaiations } from "./types";

interface Props {
  type: BinType;
  id: number;
  imageOpened: string;
  imageClosed: string;
  images: ImageVaiations;
  onDrop: (id: number) => void;
  draggingItemType: string;
}

const WasteBin: React.FC<Props> = ({
  type,
  id,
  imageOpened,
  imageClosed,
  images,
  onDrop,
  draggingItemType,
}) => {
  const [backgroundImage, setBackgroundImage] = useState<string|null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "trash",
    drop: (item: any) => {
      console.log("Item dropped:", item.id);
      onDrop(item.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const importAndSetBackground =  useCallback(async (path:string) => {
    const backImage = await import(`../../static/wasteSeg/trash/${path}.png`)
    setBackgroundImage(`url(${backImage.default})`)
  },[])
  
  const changeBackgroundImage = useCallback( async ()=>{
    if (type === BinType.Dry) {
      if (draggingItemType === BinType.Dry){
        await importAndSetBackground(imageOpened)
      }
      // else if (draggingItemType === BinType.E_Waste)
      //   backgroundImage = `url(./images/wasteSeg/trash/${images.eToDry}.png)`;
      // else if (draggingItemType === BinType.Hazardous)
      //   backgroundImage = `url(./images/wasteSeg/trash/${images.hToDry}.png)`;
      // else if (draggingItemType === BinType.Wet)
      //   backgroundImage = `url(./images/wasteSeg/trash/${images.wToDry}.png)`;
      // else if (draggingItemType === BinType.Sanitary)
      //   backgroundImage = `url(./images/wasteSeg/trash/${images.sToDry}.png)`;
    }
    // if (type === BinType.Wet) {
    //   if (draggingItemType === BinType.Dry)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.dToWet}.png)`;
    //   else if (draggingItemType === BinType.E_Waste)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.eToWet}.png)`;
    //   else if (draggingItemType === BinType.Hazardous)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.hToWet}.png)`;
    //   else if (draggingItemType === BinType.Wet)
    //     backgroundImage = `url(./images/wasteSeg/trash/${imageOpened}.png)`;
    //   else if (draggingItemType === BinType.Sanitary)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.sToWet}.png)`;
    // }
    // if (type === BinType.E_Waste) {
    //   if (draggingItemType === BinType.Dry)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.dToE}.png)`;
    //   else if (draggingItemType === BinType.E_Waste)
    //     backgroundImage = `url(./images/wasteSeg/trash/${imageOpened}.png)`;
    //   else if (draggingItemType === BinType.Hazardous)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.hToE}.png)`;
    //   else if (draggingItemType === BinType.Wet)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.wToE}.png)`;
    //   else if (draggingItemType === BinType.Sanitary)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.sToE}.png)`;
    // }
    // if (type === BinType.Sanitary) {
    //   if (draggingItemType === BinType.Dry)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.dToSan}.png)`;
    //   else if (draggingItemType === BinType.E_Waste)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.eToSan}.png)`;
    //   else if (draggingItemType === BinType.Hazardous)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.hToSan}.png)`;
    //   else if (draggingItemType === BinType.Wet)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.wToSan}.png)`;
    //   else if (draggingItemType === BinType.Sanitary)
    //     backgroundImage = `url(./images/wasteSeg/trash/${imageOpened}.png)`;
    // }
    // if (type === BinType.Hazardous) {
    //   if (draggingItemType === BinType.Dry)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.dToHaz}.png)`;
    //   else if (draggingItemType === BinType.E_Waste)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.eToHaz}.png)`;
    //   else if (draggingItemType === BinType.Hazardous)
    //     backgroundImage = `url(./images/wasteSeg/trash/${imageOpened}.png)`;
    //   else if (draggingItemType === BinType.Wet)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.wToHaz}.png)`;
    //   else if (draggingItemType === BinType.Sanitary)
    //     backgroundImage = `url(./images/wasteSeg/trash/${images.sToHaz}.png)`;
    // }
  },[draggingItemType,imageOpened,type,importAndSetBackground]);
 

  useEffect(() => {
    
   if (isOver) {
    changeBackgroundImage();
  } else {importAndSetBackground(imageClosed)}
  }, [isOver,changeBackgroundImage,imageClosed,importAndSetBackground])



  useEffect(() => {
    importAndSetBackground(imageClosed)
  
   
  }, [importAndSetBackground,imageClosed])

  // const loadBackgroundImage = async ()=>{
  //   const backImage = await import(`../../static/wasteSeg/trash/${imageClosed}.png`)
  //   setBackgroundImage(`url(${backImage.default})`)
  //   // let img = require(`../../static/wasteSeg/trash/${imageClosed}.png`)
  // // console.log("ttt in",img)
 
  // }

  
  
  

  return backgroundImage? (
    <div
      ref={drop}
      style={{
        backgroundImage: backgroundImage,
      }}
      className={classes.wasteBin}
    ></div>):<div></div>
  ;
};

export default WasteBin;
