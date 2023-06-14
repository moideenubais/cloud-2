import React from "react";
import { Clouds } from "../cloud/Clouds";
import NumberJackpot from "../NumberJackpot/NumberJackpot";
import classes from "./Home.module.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import WasteSegregation from "../WasteSeg/WasteSegregation";

const Navigation: React.FC = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.titleContainer}>
        <Link to="/cloud">
          <div>Order Clouds</div>
        </Link>
        <Link to="/numberJackpot">
          <div>Number Jackpot</div>
        </Link>
        <Link to="/wasteSegregation">
          <div>Segregate Waste</div>
        </Link>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/cloud" element={<Clouds />} />
        <Route path="/numberJackpot" element={<NumberJackpot />} />
        <Route path="/wasteSegregation" element={<WasteSegregation />} />
      </Routes>
    </Router>
  );
};

export default Home;
