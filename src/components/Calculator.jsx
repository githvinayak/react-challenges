import React, { useState } from "react";

const Calculator = () => {
  const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    "=",
    "C",
    ".",
  ];
  const [value, setValue] = useState("");
  const handleChnage = (e) => {
    setValue(e.target.value);
  };
  const handleClick = (e) => {
    const id = e.target.id;
    if (id === "C") {
      setValue("");
    } else if (id === "=") {
      handleSubmit();
    } else {
      setValue((val) => val + id);
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    try {
      const result = eval(value);
      setValue(result);
    } catch (error) {
      alert("Invalid expression");
    }
  };
  return (
    <>
      <main className=' h-screen w-full center flex-col gap-12'>
        <h1 className=' text-4xl font-bold'>Calculator</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChnage}
            value={value}
            className=' border-2 border-gray-300 text-xl focus:outline-none px-4 py-2'
            type='text'
            name=''
            id=''
          />
        </form>
        <div
          onClick={handleClick}
          className=' grid grid-cols-4 w-[50vh] h-[50vh] gap-4'
        >
          {keys.map((key, index) => (
            <button
              className='bg-purple-400 text-xl font-medium hover:shadow-dark transition-all outline-none'
              id={key}
              key={index}
            >
              {key}
            </button>
          ))}
        </div>
      </main>
    </>
  );
};

export default Calculator;
