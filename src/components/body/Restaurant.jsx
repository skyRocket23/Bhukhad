import React from 'react';
import './Body.css';

const Restaurant = (props) => {
  
    const isCardInvalid = !props?.restaurant?.data?.cloudinaryImageId
    if (isCardInvalid) {
    return null; 
  }

  return (
    <div className='restaurant'>
         <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${props?.restaurant?.data?.cloudinaryImageId}`} alt="imagefailed"/>

         <div className="content">
             <h1 style={{fontWeight:"1000",fontSize:"17px"}}>{props?.restaurant?.data?.name}</h1>
             <h4 style={{fontWeight:"500",fontSize:"14px"}}>{props?.restaurant?.data?.cuisines?.join(", ")}</h4>
             <div className="details">
                <p>{props?.restaurant?.data?.avgRating} stars</p>
                <h1>.</h1>
                <p>{props?.restaurant?.data?.sla?.maxDeliveryTime} minutes</p>
                <h1>.</h1>
                <p>{props?.restaurant?.data?.costForTwoString}</p>
             </div>
         </div>
    </div>
  )
}

export default Restaurant