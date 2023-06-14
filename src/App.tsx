import React from "react";

import Home from "./components/Home/Home";

const App = () => {
  registerServiceWorker();
  // useEffect(() => {
  //   if (isMobile) {
  //     const lockLandscapeOrientation = () => {
  //       if (
  //         window.screen.orientation &&
  //         window.screen.orientation.lock &&
  //         typeof window.screen.orientation.lock === "function"
  //       ) {
  //         // For modern browsers supporting screen.orientation API
  //         window.screen.orientation.lock("landscape").catch((error) => {
  //           console.log("Failed to lock the orientation:", error);
  //         });
  //       }
  //     };

  //     lockLandscapeOrientation();

  //     // Clean up the event listener when the component unmounts
  //     return () => {};
  //   }
  // }, [isMobile]);
  // useEffect(() => {
  //   const handleOrientationChange = () => {
  //     const isPortrait = window.innerWidth < window.innerHeight;

  //     if (isPortrait) {
  //       // Redirect to landscape view
  //       if (window.screen.orientation && window.screen.orientation.lock) {
  //         window.screen.orientation.lock('landscape');
  //       }
  //     }
  //   };

  //   // Listen for orientation changes
  //   window.addEventListener('orientationchange', handleOrientationChange);

  //   // Call the function on component mount
  //   handleOrientationChange();

  //   // Clean up the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener('orientationchange', handleOrientationChange);
  //   };

  // }, []);

  return <Home />;
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
