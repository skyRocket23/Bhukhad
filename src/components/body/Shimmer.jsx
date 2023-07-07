import React from 'react';
import './Shimmer.css';

const ShimmerCard = () => (
  <div className='restaurant shimmer'></div>
);

const Shimmer = () => {
  return (
    <div className='cards'>
      {Array.from({ length: 10 }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
