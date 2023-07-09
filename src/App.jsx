import React, { createContext, useState } from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import { Provider } from 'react-redux'
import store from "./redux/store";

import "./App.css";
import { Outlet } from "react-router-dom";

export const ThemeContext = createContext(null);


const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
  <Provider store={store}>
    <ThemeContext.Provider value={theme}>
      <div className="App" id={theme}>
        <Header toggleTheme={toggleTheme} />
        {/* <Body /> */}
        <Outlet/>
        <Footer />
      </div>
    </ThemeContext.Provider>
  </Provider>
  );
};

export default App;
