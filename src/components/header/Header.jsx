import React, { useContext } from "react";
import image from "../../assets/logogo.png";
import "./Header.css";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";
import useCheckOnline from "../../hooks/useCheckOnline";
import { useSelector } from "react-redux";


const Header = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  const isOnline = useCheckOnline();

  const items = useSelector(store => store.cart.items);

  return (
    <div className="flex justify-between bg-sky-100 h-20 items-center sticky top-0 z-10">

      <div className="flex items-center">
        <img src={image} alt="hi" className="w-20 mx-5"/>
        <div className="mx-5">
          <ReactSwitch
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </div>
      </div>

      <div className="flex itmes-center justify-center">
        {/* {isOnline ?<h1>✅</h1> :<h1>🔴 </h1>} */}
        <ul className="flex itmes-center justify-center">
          <li className="mx-1 p-6 rounded-lg text-indigo-600 font-bold text-xl text-center hover:underline"><Link to="/">Home</Link></li>
          <li className="mx-1 p-6 rounded-lg text-indigo-600 font-bold text-xl text-center hover:underline"><Link to="/about">About</Link></li>
          <li className="mx-1 p-6 rounded-lg text-indigo-600 font-bold text-xl text-center hover:underline"><Link to="/cart">Cart  [ {items.length} ]</Link></li>
        </ul>
      </div>

    </div>
  );
};

export default Header;
