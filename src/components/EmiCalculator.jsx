import React, { useEffect, useState } from "react";

const EmiCalculator = () => {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emii, setEmi] = useState(0);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if( name === "principle"){
        setPrinciple(value);
    }else if( name === "interest"){
        setInterest(value);
    }else{
        setYears(value);
    }
  };
   
  const calculateEmi=()=>{
    if(principle && interest && years){
      const mothlyInterests = interest/12/100;
      const monthlyTenure = years*12;
      let numerator = principle * mothlyInterests * Math.pow( 1 + mothlyInterests,monthlyTenure);
      let denominator = Math.pow( 1 + mothlyInterests,monthlyTenure) - 1
      let emi =Math.round(numerator/denominator);
      setEmi(emi)
    }
  }

  useEffect(()=>{
    calculateEmi();
  },[principle,interest,years]);

  console.log(principle);
  console.log(interest);
  console.log(years);
  return (
    <>
      <div className='flex justify-center mx-auto items-center h-screen bg-[#211432]'>
        <div className="w-1/3 bg-[#342844] flex flex-col py-3 gap-3 justify-center rounded-lg items-center ">
          <h1 className='text-[25px] font-bold text-center py-6 text-white'>
            Mortage Calculator
          </h1>
          <form className="w-2/3 flex flex-col gap-4">
            <div className='flex flex-col gap-2 px-4'>
              <label className="text-[#683CE4] text-[20px] font-semibold">Principal</label>
              <input
                onChange={handleOnChange}
                placeholder='principle'
                name='principle'
                type='text'
                className="bg-[#404059] px-4 py-2 rounded-xl"
              />
            </div>
            <div className='flex flex-col gap-2 px-4'>
              <label className="text-[#683CE4] text-[20px] font-semibold">Interest</label>
              <input
                onChange={handleOnChange}
                placeholder='interest'
                name='interest'
                type='text'
                className="bg-[#404059] px-4 py-2 rounded-xl"
              />
            </div>
            <div className='flex flex-col gap-2 px-4'>
              <label className="text-[#683CE4] text-[20px] font-semibold">Years</label>
              <input
                onChange={handleOnChange}
                placeholder='years'
                name='years'
                type='text'
                className="bg-[#404059] px-4 py-2 rounded-xl"
              />
            </div>
          </form>
          <h2 className="text-[#683CE4] text-[]17px font-semibold py-6">Your EMI is : {emii} </h2>
        </div>
      </div>
    </>
  );
};

export default EmiCalculator;
