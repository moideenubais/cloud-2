import React, { useEffect, useState } from "react";
import "./MovingDivs.css"; // Import the CSS file

const MovingDivs = () => {
  const [divs, setDivs] = useState([]);
  console.log("divs", divs);

  useEffect(() => {
    // Generate initial divs
    generateDivs();
  }, []);

  const generateDivs = () => {
    const newDivs = [];

    // Number of divs and their initial positions
    const numDivs = 10;
    const initialPositions = [
      { top: 10 },
      { top: 150 },
      { top: 350 },
      // Add more initial positions as needed
    ];

    for (let i = 0; i < numDivs; i++) {
      const div = {
        id: i,
        top: initialPositions[i % initialPositions.length].top,
        animationDelay: `${i +2}s`,

      };
      newDivs.push(div);
    }

    setDivs(newDivs);
  };
  return (
    <div className="moving-divs-container">
      {divs.map((div) => (
        <div key={div.id} className="moving-div" style={{ top: div.top,animationDelay:div.animationDelay, backgroundImage: `url(${process.env.PUBLIC_URL}/cloud.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', }}>
          {div.id+1}
        </div>
      ))}
    </div>
  );
};

export default MovingDivs;
