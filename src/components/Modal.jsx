import React from "react";
import { RxCross1 } from "react-icons/rx";

const Modal = ({handleCancel,handleOffer}) => {
    const handleOutsideClick = (e)=>{ 
        e.preventDefault();
        if(e.target.id === "modal"){
            handleCancel();
        }
    }
  return (
    <>
      <div onClick={handleOutsideClick} id="modal" className='flex items-center justify-center h-screen w-screen bg-black/54'>
        <div className='relative h-2/5 px-5  bg-white py-4 box-border flex flex-col justify-center rounded-xl items-center shadow-lg w-2/6'>
          <button onClick={handleCancel} className='absolute top-5 left-10'>
            <RxCross1 className=' w-6 h-6' />
          </button>
          <div className='flex flex-col justify-center items-center gap-5'>
            <h1>Click the below button to accept our amazing offer</h1>
            <button
              onClick={handleOffer}
              className='px-5 py-3 rounded-lg bg-black text-white'
            >
              Accept Offer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
