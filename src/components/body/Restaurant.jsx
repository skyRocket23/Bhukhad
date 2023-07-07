import React from 'react';
import './Body.css';

const Restaurant = (props) => {
  
    const isCardInvalid = !props?.restaurant?.data?.cloudinaryImageId
    if (isCardInvalid) {
    return null; 
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐️</span>);
    }
    return stars;
  };

  return (
    <div className="w-72 m-4 bg-white p-5 rounded-xl shadow-lg hover:shadow-gray-800">
         <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props?.restaurant?.data?.cloudinaryImageId}`} alt="imagefailed" className="rounded-lg mb-3"/>

         <div className="content">
             <h1 className="text-pink-800 font-bold">{props?.restaurant?.data?.name}</h1>
             <h4 className="text-indigo-600 font-medium">{props?.restaurant?.data?.cuisines?.join(", ")}</h4>
             <div className="details">
                <p>{renderStars(props?.restaurant?.data?.avgRating)}</p>
                <h1>.</h1>
                <p className="text-indigo-600 font-normal">{props?.restaurant?.data?.sla?.maxDeliveryTime} minutes</p>
                <hr className="my-5 text-black"/>
                <p className="text-indigo-600 font-normal">{props?.restaurant?.data?.costForTwoString}</p>
             </div>
         </div>
    </div>
  )
}

export default Restaurant