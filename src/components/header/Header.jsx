import React, { useContext } from "react";
import image from "../../assets/logogo.png";
import "./Header.css";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../App";
import { Link } from "react-router-dom";
import useCheckOnline from "../../hooks/useCheckOnline";

const Header = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  const isOnline = useCheckOnline();

  return (
    <div className="flex justify-between bg-pink-300 h-20 items-center">

      <div className="flex items-center">
        <img src={image} alt="hi" className="w-20 mx-5"/>
        <div className="mx-5">
          <ReactSwitch
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </div>
      </div>

      <div className="flex p-10">
        {isOnline ?<h1>✅</h1> :<h1>🔴 </h1>}
        <ul className="flex mx-5">
          <li className="mx-5"><Link to="/">Home</Link></li>
          <li className="mx-5"><Link to="/about">About</Link></li>
          <li className="mx-5"><Link to="/card">Cart</Link></li>
          <li className="mx-5"><Link to="/profile">Profile</Link></li>
        </ul>
      </div>

    </div>
  );
};

export default Header;
