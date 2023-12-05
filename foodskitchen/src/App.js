import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Food from "./Components/FoodPage/Food";
import Main from "./Components/Main/Main";
import Order from "./Components/order/Order";
import Login from "./Components/Login/Login";
import Lastpage from "./Components/LastPage/Lastpage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Login /> */}
        <Routes>
          <Route path="Main" element={<Main />}></Route>
          <Route path="Menu" element={<Menu />}></Route>
          <Route path="Order" element={<Order />}></Route>
          <Route path="Lastpage" element={<Lastpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
