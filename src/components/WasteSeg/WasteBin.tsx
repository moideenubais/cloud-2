import React from "react";
import classes from "./WasteBin.module.css";
import { useDrop } from "react-dnd";
import { BinType } from "./types";

interface Props {
  type: BinType;
  id: number;
  imageOpened: string;
  imageClosed: string;
  onDrop: (id: number) => void;
}

const WasteBin: React.FC<Props> = ({
  type,
  id,
  imageOpened,
  imageClosed,
  onDrop,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: type,
    drop: (item: any) => {
      console.log("Item dropped:", item.id);
      onDrop(item.id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        backgroundImage: `url(./images/wasteSeg/trash/${
          isOver ? imageOpened : imageClosed
        }.png)`,
      }}
      className={classes.wasteBin}
    ></div>
  );
};

export default WasteBin;
