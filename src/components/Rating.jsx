import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  console.log("rating is" + " " + rating);
  console.log("hover is" + " " + hover);
  console.log((rating && hover) || hover);

  return (
    <>
      <div className='h-screen w-full flex flex-col justify-start items-center gap-4 pt-14'>
        <h1 className=' text-2xl font-bold'>Star Ratings</h1>
        <div className='flex gap-4'>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              onClick={() => setRating(num)}
              onMouseOver={() => setHover(num)}
              onMouseLeave={() => setHover(rating)}
              key={num}
            >
              <span
                className={`${
                  num <= ((rating && hover) || hover)
                    ? "text-yellow-400 "
                    : "text-gray-100"
                }`}
              >
                <FaStar className=' h-10 w-10' />
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rating;
