import React, { useState } from 'react'
import Modal from './Modal';

const CustomModal = () => {
    const [modal,setModal] = useState(false)
    const [btn,setBtn] = useState(true)
    const [offer,setOffer] = useState(false)

    const handleClick = ()=>{
        setModal((prev)=>!prev);
        setBtn((prev)=>!prev)
    }
    const handleCancel = ()=>{
        setModal((prev)=>!prev); 
        setBtn((prev)=>!prev)
    }
    const handleOffer = ()=>{
        setOffer((prev)=>!prev)
        setModal((prev)=>!prev); 
        
    }
  return (
    <>
        <div className='flex justify-center items-center h-screen w-full'>
           {btn &&( <button onClick={handleClick} className='px-5 py-3 rounded-lg bg-black text-white'>Show offer</button>)}
            {
                modal && (
                    <Modal handleCancel={handleCancel} handleOffer={handleOffer} />
                )
            }
            {
                offer && (
                    <div className=''>
                        <h1>offer accepted</h1>
                    </div>
                )
            }
        </div>
    </>
  )
}

export default CustomModal