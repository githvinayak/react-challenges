import React, { useState } from "react";

const UndoCounter = () => {
    const [value,setValue] = useState(0);
    const [history,setHistory] = useState([]);
    const [redoList,setRedoList] = useState([]);
    const [undoCount,setUndoCount] = useState(0);
    const handleUndo = ()=>{
        if(history.length){
            if(undoCount + 1 > 5  ){
                alert("you can't undo more than 5 times");
                return;
            }
            const copyHist = [...history];
            const firstItem = copyHist.shift();
            console.log(firstItem);
            setHistory(copyHist)
            setValue(firstItem.prev)
            const copyRedoList = [...redoList];
            copyRedoList.push(firstItem)
            setRedoList(copyRedoList)
            console.log(copyRedoList);
        }
    }
    const handleRedo=()=>{
        if(redoList.length){
            const copyRedo = [...redoList];
            const lastItem = copyRedo.pop();
            console.log(lastItem);
             setRedoList(copyRedo)
             const {action,prev,curr} = lastItem;
            setValue(lastItem.curr)
            maintainHistory(action,prev,curr)
        }
    }

    const maintainHistory=(key,prev,curr)=>{
        const obj = {
            action : key,
            prev,
            curr
        }

        const copyHistory = [...history]
        copyHistory.unshift(obj)
        setHistory(copyHistory)
    }

  const handleClick=(key)=>{
    const val = parseInt(key)
    maintainHistory(key,value,val+value)
    setValue((prev)=>prev + val)
    }
  return (
    <>
      <div className="flex flex-col h-screen w-full justify-center gap-10 text-white items-center">
        <div className="flex gap-4">
          <button onClick={handleUndo} className="px-5 py-2 shadow-md bg-black">Undo</button>
          <button onClick={handleRedo} className="px-5 py-2 shadow-md bg-black">Redo</button>
        </div>
       <div className="flex w-full justify-evenly gap-5 "> 
       {
            [-100,-10,-1].map((i,idx)=>(
            <button key={idx} name="minus" className="px-5 py-2 shadow-md bg-black"  onClick={()=> handleClick(i)} >{i}</button>
            ))
        }
        <div className="text-[20px] text-black font-semibold">{value}</div>
        {
            ["+1","+10","+100"].map((i,idx)=>(
               <button key={idx} name="plus" className="px-5 py-2 shadow-md bg-black"  onClick={()=> handleClick(i)} >{i}</button>
            ))
        }</div>
        <div className="text-black flex flex-col shadow-lg h-[400px] w-[300px] px-5 py-2">
           <h1 className="text-black tex-[22px] font-semibold   text-center ">history</h1>
           {
            history.map((item,idx)=>{
             return   <div key={idx}>{item.action} : ({item.prev} : {item.curr})</div>
            }
            )
           }
        </div>
      </div>
    </>
  );
};

export default UndoCounter;
