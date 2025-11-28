import React, { useEffect, useRef, useState } from "react";

const Otp = () => {
  const emptyArr = ["", "", "", ""];
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [inputs, setInputs] = useState(emptyArr);
  const [missing, setMissing] = useState(emptyArr);
  const CODE = "1234";

  const handleSubmit = () => {
    const missed = inputs
      .map((item, i) => {
        if (item === "") return i;
      })
      .filter((item) => item || item === 0);
    console.log("missed ", missed);
    setMissing(missed);
    if (missed.length) {
      return;
    }

    const userInput = inputs.join("");
    const isMatch = userInput === CODE;
    const msg = isMatch ? "Code is Valid" : "Code is not Valid";
    alert(msg);
  };
  useEffect(() => {
    refs[0].current.focus();
  }, []);

  const handleInputChange = (e, index) => {
    const val = e.target.value;
    console.log(val, !Number(val), index);
    if (!Number(val)) return;

    console.log("index: ", index);
    if (index < inputs.length - 1) {
      // 1
      refs[index + 1].current.focus();
    }
    const copyInputs = [...inputs];
    copyInputs[index] = val;
    setInputs(copyInputs);
  };

  const handleOnKeyDown = (e, index) => {
    console.log(e.keyCode, index);
    if (e.keyCode === 8) {
      const copyInputs = [...inputs];
      copyInputs[index] = "";
      setInputs(copyInputs);

      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");
    console.log("paste data ", data);
    if (!Number(data) || data.length !== inputs.length) return;

    const pastCode = data.split("");
    setInputs(pastCode);
    refs[inputs.length - 1].current.focus();
  };
  console.log("inputs ", inputs);
  return (
    <>
      <div className='flex shadow-md flex-col gap-2 w-[max-content] h-[max-content] px-4 py-2'>
        <h1 className='text-2xl font-extrabold'>Enter Otp</h1>
        <div className='flex gap-3'>
          {emptyArr.map((item, i) => (
            <input
              key={i}
              className='flex-1 focus:outline-purple-500 w-14 py-2 text-center border-2 border-gray-300 rounded-md'
              type='text'
              maxLength={1}
              ref={refs[i]}
              onPaste={handlePaste}
              onChange={(e) => handleInputChange(e, i)}
              onKeyDown={(e) => handleOnKeyDown(e, i)}
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className='w-full bg-purple-600 py-2 text-white font-medium'
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Otp;
