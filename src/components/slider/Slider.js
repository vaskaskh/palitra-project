import React, { useState } from 'react';
import { motion } from 'framer-motion';
import carouseldata from '../../data/carousel.json';

const Slider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
      return updatedIndexes;
    });
  };

  const handlePrev = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 4) % 5);
      return updatedIndexes;
    });
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 0.7, zIndex: 5 },
    left1: { x: "-40%", scale: 0.5, zIndex: 2 },
    right1: { x: "40%", scale: 0.5, zIndex: 2 },
    left: { x: "-65%", scale: 0.3, zIndex: 1 },
    right: { x: "65%", scale: 0.3, zIndex: 1 },
  };

  return (
    <div className='flex items-center flex-col  relative'>
      {carouseldata.map((res)=>(
        <>
          <motion.img
            key={res.id}
            src={res.image}
            alt={res.title}
            className="rouded-[12px] w-[475.81px]  h-[655px] "
            initial="center"
            animate={positions[positionIndexes[res.id]]}
            variants={imageVariants}
            transition={{duration: 0.5}}
            style={{position:"absolute"}}
          />
        </>
      ))}


      <button onClick={handleNext} className='absolute top-[339px] right-[64px] bottom-[282px] '><img src='../images/ArrowRight.png' alt=''/></button>

      <button onClick={handlePrev} className='absolute left-[64px] top-[339px] bottom-[282px] '><img src='../images/ArrowLeft.png' alt=''/></button>
    </div>
  );
};

export default Slider;
