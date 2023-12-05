import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

import burger from "../assets/burger.jpeg";
import coke from "../assets/coke.jpeg";
import fries from "../assets/fries.jpeg";
import pepsi from "../assets/pepsi.jpeg";
// import Food from "../FoodPage/Food";

const Menu = () => {
  const [count, setCount] = useState(0);

  const IncrementCount = () => {
    setCount(count + 1);
  };

  const DecrementCount = () => {
    if (count === 0) {
      setCount(count - 0);
    } else {
      setCount(count - 1);
    }

    return { count, DecrementCount, IncrementCount };
  };

  return (
    <div>
      <div className="head">
        <h1>
          <Link to="/Main">Food's Restaurant</Link>
        </h1>
        <Link to="/Order">
          <i class="fa-solid fa-cart-shopping"></i>
        </Link>
        <strong>{count}</strong>
      </div>
      <div className="menu-page">
        {/* <span className="count">{count}</span> */}
        <div className="menu-boxes">
          <div className="box1">
            <img src={burger} alt="" />
            <h3>HamBurger</h3>
            <p>Price 200</p>
            <button onClick={IncrementCount}> + </button>
            <button onClick={DecrementCount}> - </button>
          </div>
          <div className="box1">
            <img src={coke} alt="" />
            <h3>Coke</h3>
            <p>Price 50</p>
            <button onClick={IncrementCount}> + </button>
            <button onClick={DecrementCount}> - </button>
          </div>
          <div className="box1">
            <img src={fries} alt="" />
            <h3>Fries</h3>
            <p>Price 100</p>
            <button onClick={IncrementCount}> + </button>
            <button onClick={DecrementCount}> - </button>
          </div>
          <div className="box1">
            <img src={pepsi} alt="" />
            <h3>Pepsi</h3>
            <p>Price 50</p>
            <button onClick={IncrementCount}> + </button>
            <button onClick={DecrementCount}> - </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
