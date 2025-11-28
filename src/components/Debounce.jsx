import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import debounceQuery from "../utils/debounce";

const Debounce = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const handleInputChange = (e) => {
    console.log(e.target.value);

    setInput(e.target.value);
  };
  const initApiCall = async() => {
    const url = `https://api.frontendeval.com/fake/food/${input}`;
    const data = await debounceQuery(url);

    setList(data);
  };
  useEffect(() => {
    if (input) {
      initApiCall();
    }
  }, [input]);
  return (
    <>
      <div className='App'>
        <h1>Debounce API call</h1>
        <input
          value={input}
          type='text'
          className=' border-2 border-black'
          onChange={handleInputChange}
        />

        {list && list.length > 0 && (
          <div className='list'>
            {list && list.map((item, index) => <div key={index}>{item}</div>)}
          </div>
        )}
      </div>
    </>
  );
};

export default Debounce;
