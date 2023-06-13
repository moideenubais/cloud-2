import React from 'react';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend'
import WasteSeg from './components/WasteSeg/WasteSeg';

const App = () => {
  registerServiceWorker()
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="app">
      <WasteSeg />
    </div>
    </DndProvider>
  );
};

const registerServiceWorker:any = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/serviceWorker.js", {
        scope: "/",
      });
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
