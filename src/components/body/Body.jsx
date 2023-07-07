import React, { useState, useEffect } from "react";
import "./Body.css";
import Restaurant from "./Restaurant";
import "@fortawesome/fontawesome-free/css/all.css";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SWIGGY_API } from "../../constant";

const Body = () => {
  const [input, setInput] = useState("");
  const {dhabas,filterDhaba} = useFetch(SWIGGY_API);

  return (
    <div className="body" >
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          type="submit"
          className="searchButton"
          onClick={() => filterDhaba(input)}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>

      {dhabas.length === 0 && <Shimmer />}

      <div className="cards">
        {dhabas.map((restaurant) => (
          <Link to={`restaurant/${restaurant.data.id}`} key={restaurant?.data?.id} >
            <Restaurant restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
