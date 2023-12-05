import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="head">
        <h1>
          <Link to="/Main">Food's Restaurant</Link>
        </h1>
      </div>
      <div className="main">
        <h1>Welcome to Food's Kitchen</h1>
        <button className="goto">
          <Link to="/Menu">Go To Menu</Link>
        </button>
      </div>
    </div>
  );
};

export default Main;
