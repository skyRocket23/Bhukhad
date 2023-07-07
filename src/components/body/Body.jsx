import React, { useState, useEffect } from "react";
import "./Body.css";
import Restaurant from "./Restaurant";
import "@fortawesome/fontawesome-free/css/all.css";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocation from "../../hooks/useLocation";

const Body = () => {
  const [input, setInput] = useState("");

  const {longitude,latitude} = useLocation();
  const {dhabas,filterDhaba} = useFetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`);


  console.log(longitude,latitude);

  return (
    <div className="bg-sky-50" >
      <div className="">
        <input
          type="text"
          className="m-10 p-3 w-80 rounded-lg"
          placeholder="What are you looking for?"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          type="submit"
          className="text-indigo-600 text-xl"
          onClick={() => filterDhaba(input)}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>

      {dhabas.length === 0 && <Shimmer />}

      <div className="flex flex-wrap justify-start h-full ml-20">
        {dhabas.map((restaurant) => (
          <Link to={`restaurant/${restaurant.data.id}`} key={restaurant?.data?.id}>
            <Restaurant restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
