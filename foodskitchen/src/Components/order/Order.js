import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Order.css";

const Order = () => {
  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);
  const [friesprice, setFriesPrice] = useState(0);
  const [fcount, setFCount] = useState(0);
  const [total, setTotal] = useState(0);

  const PriceIncrement = () => {
    setPrice(price + 50);
    setTotal(total + 50);
    setCount(count + 1);
  };
  const PriceDecrement = () => {
    if (price === 0) {
      setPrice(price - 0);
    } else {
      setPrice(price - 50);
      setTotal(total - 50);
      setCount(count - 1);
    }
  };

  const FriesIncrement = () => {
    setFriesPrice(friesprice + 100);
    setTotal(total + 100);
    setFCount(fcount + 1);
  };
  const FriesDecrement = () => {
    if (friesprice === 0) {
      setFriesPrice(friesprice - 0);
    } else {
      setFriesPrice(friesprice - 100);
      setTotal(total - 100);
      setFCount(fcount - 1);
    }
  };

  return (
    <>
      <div className="order">
        <div className="head">
          <h1>
            <Link to="/Main">Food's Restaurant</Link>
          </h1>
          <Link to="/Menu">
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>
        <h1>Order Summery</h1>
        <table>
          <tr>
            <th>Name:</th>
            <td>Coke</td>
            <th>Qt:</th>
            <td>{count}</td>
            <th>Price:</th>
            <td>{price}</td>
            <td>
              <button onClick={PriceIncrement}> + </button>
            </td>
            <td>
              <button onClick={PriceDecrement}> - </button>
            </td>
          </tr>
          <tr>
            <th>Name:</th>
            <td>Fries</td>
            <th>Qt:</th>
            <td>{fcount}</td>
            <th>Price:</th>
            <td>{friesprice}</td>
            <td>
              <button onClick={FriesIncrement}> + </button>
            </td>
            <td>
              <button onClick={FriesDecrement}> - </button>
            </td>
          </tr>
          <tr>
            <th>Name:</th>
            <td>HamBurger:</td>
            <th>Qt:</th>
            <td>0</td>
            <th>Price:</th>
            <td>0</td>
            <td>
              <button> + </button>
            </td>
            <td>
              <button> - </button>
            </td>
          </tr>
          <tr>
            <th>Name:</th>
            <td>Pepsi</td>
            <th>Qt:</th>
            <td>0</td>
            <th>Price:</th>
            <td>0</td>
            <td>
              <button> + </button>
            </td>
            <td>
              <button> - </button>
            </td>
          </tr>
          <tr>
            <th>Total (INR):</th>
            <td>{total}</td>
          </tr>
        </table>
        <Link to="/Lastpage">
          <input type="button" value="save and continue" />
        </Link>
        <input type="button" value="cancel" />
      </div>
    </>
  );
};

export default Order;
