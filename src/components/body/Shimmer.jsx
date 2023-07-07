import React from 'react';
import './Shimmer.css';

const ShimmerCard = () => (
  <div className='w-52 m-4 h-64 bg-white p-5 rounded-xl shadow-lg hover:shadow-gray-800 shimmer'></div>
);

const Shimmer = () => {
  return (
    
    <div className='flex flex-wrap justify-start h-full ml-20'>
      {Array.from({ length: 10 }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
