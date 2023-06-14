import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import WasteSeg from "./components/WasteSeg/WasteSeg";
import MobileDetect from "mobile-detect";
import { TouchBackend } from "react-dnd-touch-backend";
import { Preview } from "react-dnd-preview";
import classes from './App.module.css'

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

const App = () => {
  const md = new MobileDetect(window.navigator.userAgent);
  const isMobile = md.mobile() !== null;
  const dndBackend = isMobile ? TouchBackend : HTML5Backend;
  registerServiceWorker();
  useEffect(() => {
    if (isMobile) {
      const lockLandscapeOrientation = () => {
        if (
          window.screen.orientation &&
          window.screen.orientation.lock &&
          typeof window.screen.orientation.lock === "function"
        ) {
          // For modern browsers supporting screen.orientation API
          window.screen.orientation.lock("landscape").catch((error) => {
            console.log("Failed to lock the orientation:", error);
          });
        }
      };

      lockLandscapeOrientation();

      // Clean up the event listener when the component unmounts
      return () => {};
    }
  }, [isMobile]);
  useEffect(() => {
    const handleOrientationChange = () => {
      const isPortrait = window.innerWidth < window.innerHeight;

      if (isPortrait) {
        // Redirect to landscape view
        if (window.screen.orientation && window.screen.orientation.lock) {
          window.screen.orientation.lock('landscape');
        }
      }
    };

    // Listen for orientation changes
    window.addEventListener('orientationchange', handleOrientationChange);

    // Call the function on component mount
    handleOrientationChange();

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  
  }, []);
  
  return (
    <DndProvider backend={dndBackend}>
      <div >
        <WasteSeg />
        {isMobile && <Preview generator={generatePreview} />}
      </div>
    </DndProvider>
  );
};

const registerServiceWorker: any = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/serviceWorker.js",
        {
          scope: "/",
        }
      );
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

export default App;
