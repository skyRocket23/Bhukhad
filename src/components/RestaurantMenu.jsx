import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import useFetchRestaurant from "../hooks/useFetchRestaurant";
import Shimmer from "./body/Shimmer";

const RestaurantMenu = () => {
  
 const { id } = useParams();
 const {name,baapDeta} = useFetchRestaurant(id);

  return (
    <div className="menu">
      <h1>{name}</h1>

      <div className="baap__Deta">

        {baapDeta.length>0 ? baapDeta.map((itenary, index) => {
          const { title, itemCards } = itenary?.card?.card;

          return (
            <div key={index}>
              <h1 style={{color:"red"}}>{title}</h1>
              <ul>
                {itemCards?.map((item, subIndex) => {
                  const { name } = item?.card?.info;
                  return <li key={subIndex}>{name}</li>;
                })}
              </ul>
            </div>
          );
        }):<Shimmer/>}
      </div>
    </div>
  );
};

export default RestaurantMenu;
