import React, { useState } from "react";

const Otp = () => {
  const emptyArr = ["", "", "", ""];
  const [input, setInput] = useState("");
  const handleClick = () => {
  };
  return (
    <>
      <div className='flex shadow-md flex-col gap-2 w-[max-content] h-[max-content] px-4 py-2'>
        <h1 className='text-2xl font-extrabold'>Enter Otp</h1>
        <div className='flex gap-3'>
          {emptyArr.map((item, idx) => (
            <input
              key={idx}
              className='flex-1 focus:outline-purple-500 w-14 py-2 text-center border-2 border-gray-300 rounded-md'
              type='text'
              onChange={(e) => setInput(e.target.value)}
              maxLength={1}
            />
          ))}
        </div>
        <button className='w-full bg-purple-600 py-2 text-white font-medium'>
          Submit
        </button>
      </div>
    </>
  );
};

export default Otp;
