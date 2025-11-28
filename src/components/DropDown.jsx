import React, { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];

const DropDown = () => {
  const [country, setCountry] = useState([]);
  const handleClick = (e) => {
    console.log(e.target.value);
    setCountry([e.target.value]);
  };
  return (
    <>
      <div className='App'>
        <h1>Hello CodeSandbox</h1>
        <select
          onChange={handleClick}
          value={country}
          className='border-2 border-black'
        >
          {countries.map((i, index) => (
            <option key={index} value={index}>
              {i.name}
            </option>
          ))}
        </select>
        {country.length > 0 && (
          <select className='border-2 border-black'>
            {countries[country].cities.map((i, index) => (
              <option key={index} value={i}>
                {i}
              </option>
            ))}
          </select>
        )}
      </div>
    </>
  );
};

export default DropDown;
