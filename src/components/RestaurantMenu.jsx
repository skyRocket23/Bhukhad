import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import useFetchRestaurant from "../hooks/useFetchRestaurant";
import Shimmer from "./body/Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { name, imageId, baapDeta } = useFetchRestaurant(id);

  return (
    <div className="flex justify-center align-center bg-sky-50">
      <div className="mr-14 fixed left-48 top-48 h-full">
        <h1 className="text-red-600 font-bold text-6xl">{name}</h1>

        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageId}`}
          alt="imagefailed"
          className="rounded-lg mb-3"
        />
      </div>

      <div className="relative top-24 left-80 z-0">
        {baapDeta.length > 0 ? (
          baapDeta.map((itenary, index) => {
            const { title, itemCards } = itenary?.card?.card;

            return (
              <div key={index}>
                <h1 className="text-red-600 font-bold">{title}</h1>
                <ul>
                  {itemCards?.map((item, subIndex) => {
                    const { name } = item?.card?.info;
                    return <li key={subIndex}>{name}</li>;
                  })}
                </ul>
              </div>
            );
          })
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
