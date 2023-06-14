import React from 'react';
import { DndProvider } from 'react-dnd';
import WasteSeg from './WasteSeg';
import { Preview } from 'react-dnd-preview';
import MobileDetect from 'mobile-detect';
import { TouchBackend } from 'react-dnd-touch-backend';
import { HTML5Backend } from 'react-dnd-html5-backend';
import classes from './WasteSegregation.module.css'

interface Props {
    // Add your prop types here
}
const generatePreview = ({ item, style }: any) => {
    return (
      <div style={style} className={classes.previewContainer}>
        <img
          src={`./images/wasteSeg/${item.url}.png`}
          alt="wasteItemImage"
        />
      </div>
    );
  };
const WasteSegregation: React.FC<Props> = (props) => {
    const md = new MobileDetect(window.navigator.userAgent);
    const isMobile = md.mobile() !== null;
    const dndBackend = isMobile ? TouchBackend : HTML5Backend;
    return (
        <DndProvider backend={dndBackend}>
      <div >
        <WasteSeg />
        {isMobile && <Preview generator={generatePreview} />}
      </div>
    </DndProvider>
    );
};

export default WasteSegregation;