import { useState } from "react";

const AccordianData = ({items,index}) => {
    const [isOpen,setisOpen] = useState(false);
    const handleClick = () => {
        setisOpen(!isOpen)
    }
  return (
    <>
      <div className='py-3 rounded-lg px-6 bg-slate-400' key={index}>
        <h3 onClick={handleClick} className='font-semibold text-[18px]'>
          {items.Question}
        </h3>
        <p className={`text-[16px] font-normal ${isOpen ? "flex" : "hidden"} `}>
          {items.Answer}
        </p>
      </div>
    </>
  );
};

export default AccordianData;
