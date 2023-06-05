import React from 'react';
import { Clouds } from './components/cloud/Clouds';

const App = () => {
  registerServiceWorker()
  return (
    <div className="app">
      <Clouds />
    </div>
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
