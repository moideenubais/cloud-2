import React from "react";
import { useDrag } from "react-dnd";
import classes from "./WasteItem.module.css";
import { BinType } from "./types";

interface Props {
  id: number;
  url: string;
  type: BinType;
}

const WasteItem: React.FC<Props> = ({ id, url, type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { id: id,url },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div className={classes.wasteContainer}>
      {
        <img
          ref={drag}
          src={`./images/wasteSeg/${url}.png`}
          height="100%"
          width="100%"
          style={{ display: isDragging ? "none" : "block" }}
          alt="wasteItemImage"
        />
      }
    </div>
  );
};

export default WasteItem;
