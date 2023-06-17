import React, { useEffect, useState } from "react";

interface ImagePreloaderProps {
  images: string[];
  children: React.ReactNode;
  loadingIndicator?: React.ReactElement;
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({
  images,
  children,
  loadingIndicator = <div style={{color:"white"}}>Loading...</div>,
}) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    preloadImages();
  }, []);

  const preloadImages = () => {
    const imagePromises: Promise<void>[] = [];

    images.forEach((imageUrl) => {
      const imagePromise = new Promise<void>((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve();
        image.onerror = reject;
        image.src = imageUrl;
      });

      imagePromises.push(imagePromise);
    });

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Error preloading images:", error);
      });
  };

  return imagesLoaded ? <>{children}</> : loadingIndicator;
};

export default ImagePreloader;
