import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import classes from "./WasteItem.module.css";
import { BinType } from "./types";

interface Props {
  id: number;
  url: string;
  type: BinType;
  setDraggingItemType: (draggedItemType:string) => void;
}

const WasteItem: React.FC<Props> = ({ id, url, type, setDraggingItemType }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type:'trash',
    item: { id: id, url },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    if (isDragging) setDraggingItemType(type);
  }, [isDragging, setDraggingItemType, id, url, type]);

  return (
    <div
      className={classes.wasteContainer}
      style={{ display: isDragging ? "none" : "block" }}
    >
      {
        <img
          ref={drag}
          src={`./images/wasteSeg/${url}.png`}
          height="100%"
          width="100%"
          alt="wasteItemImage"
        />
      }
    </div>
  );
};

export default WasteItem;
