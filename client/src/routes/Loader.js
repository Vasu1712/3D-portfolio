import React, { useState, useEffect } from 'react';
import '../loader.css';

const Loader = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage >= 100) {
          clearInterval(interval);
          return 99;
        }
        return prevPercentage + 1;
      });
    }, 40); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="content">
        {Array.from({ length: 16 }).map((_, index) => (
          <div className="cuboid" key={index}>
            {Array.from({ length: 6 }).map((_, sideIndex) => (
              <div className="side" key={sideIndex}></div>
            ))}
          </div>
        ))}
      </div>
      <div className="percentage text-white flex-col justify-center items-center">
        <p className="text-lg font-light">
          believe . become
        </p>
        <p className="text-8xl font-extrabold">
          {percentage}
        </p>
      </div>
    </>
  );
};

export default Loader;
