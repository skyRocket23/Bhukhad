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
    <div className="header">
      <div className="left">
        <img src={image} alt="hi" />
       {/* <iframe src="https://giphy.com/embed/XbAYSN0jUBQbe" width="480" height="245" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p>Bhuukhad</p> */}
        <div className="switch">
          <ReactSwitch
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </div>
      </div>

      <div className="right">
        
        
        {isOnline ?<h1>✅</h1> :<h1>🔴 </h1>}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/card">Cart</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
