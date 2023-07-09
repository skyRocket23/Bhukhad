import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RestaurantMenu.css";
import useFetchRestaurant from "../hooks/useFetchRestaurant";
import Shimmer from "./body/Shimmer";
import {useSelector,useDispatch} from "react-redux"
import {addItem} from "../redux/cartSlice"

const RestaurantMenu = () => {
  const { id } = useParams();
  const { name, imageId, baapDeta } = useFetchRestaurant(id);

  const items = useSelector(store => store.cart.items);
  const dispatch = useDispatch();


  const handleAddItem = (item) => {
      dispatch(addItem(item));
  }

  // console.log(items);

  return (
    <div className=" bg-sky-50">
      <div className="h-full">
        <h1 className="text-red-600 font-bold text-6xl text-center">{name}</h1>

        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${imageId}`}
          alt="imagefailed"
          className="rounded-lg text-center my-auto"
        />
      </div>

      <div className="">
        {baapDeta.length > 0 ? (
          baapDeta.map((itenary, index) => {
            const { title, itemCards } = itenary?.card?.card;

            return (
              <div key={index}>
                <h1 className="text-red-600 font-bold">{title}</h1>
                <ul>
                  {itemCards?.map((item, subIndex) => {
                    const { name } = item?.card?.info;
                    return <div  key={subIndex}><li>{name}</li><button onClick={() => handleAddItem(item?.card?.info)}>➕</button></div>;
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
