import { useEffect, useState } from "react";

function Counter() {
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handleStart = ()=>{
    if(hours < 0 || minutes < 0 || seconds <= 0){
      alert("Please enter values")
      return;
    }else{
      setStart(true)
    }
  }
  const handlePause=()=>{
    setPause(true);
    clearInterval(timerId);
  }
  const handleResume = ()=>{
    setPause(false);
    runTimer(seconds,minutes,hours)
  }

  const handleReset = () => {
    setStart(false);
    resetTimer();
  }

  const handleInput = (e)=>{
    const value = e.target.value;
    const id = e.target.id
    if(id==="hours"){
      setHours(value)
    }else if(id==="minutes"){
      setMinutes(value)
    }else{
      setSeconds(value)
    }
  }

  const runTimer= (sec,min,hr,tid)=>{
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else if (min === 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59)

    if(sec===0 || min===0 || hr===0){
      handleReset();
      alert('Timer is finished');
      clearInterval(tid);
      return
  }
}
}

const resetTimer = () => {
  setHours(0);
  setMinutes(0);
  setSeconds(0);
  clearInterval(timerId);
}

  useEffect(()=>{
    let tid;
    if(start){
      tid=setInterval(()=>{runTimer(seconds,minutes,hours)},1000),
      console.log(tid);
      setTimerId(tid)
    }
    return ()=>{clearInterval(tid)}

  },[start,hours,minutes,seconds])

  return (
    <>
      <div className='h-screen flex flex-col gap-10 items-center justify-center'>
        <h1 className='text-[30px] font-bold tracking-wide'>Countdown timer</h1>
        {
          !start && (
            <div className='mx-auto flex justify-center gap-5 items-center'>
          <div className='flex gap-2'>
            <input
            id="hours"
            onChange={handleInput}           
            className=' border-2 border-black p-4 w-16 h-1/2'
              type='hours'
              placeholder='HH'
            />
            <input
            id="minutes"
            onChange={handleInput}
              className=' border-2 border-black p-4 w-16 h-1/2'
              type='minutes'
              placeholder='MM'
            />
            <input
            id="seconds"
            onChange={handleInput}
              className=' border-2 border-black p-4 w-16 h-1/2'
              type='seconds'
              placeholder='SS'
            />
          </div>
          <button
            onClick={handleStart}
            className=' p-4 w-16 rounded-xl text-white bg-black'
          >
            Start
          </button>
        </div>
          )
        }

        {start && (
          <div className='flex gap-3'>
            <div className='flex gap-3 items-center justify-center font-semibold text-[40px]'>
              <div>{hours < 10 ? `0${hours}` : hours}</div>
              <span >:</span>
              <div >{minutes < 10 ? `0${minutes}` : minutes}</div>
              <span >:</span>
              <div >{seconds < 10 ? `0${seconds}` : seconds}</div>
            </div>
            <div className='flex gap-3'>
              { !pause &&<button onClick={handlePause} className=' p-4 w-16 rounded-xl text-white bg-black'>
                Pause
              </button>}
             { pause && <button onClick={handleResume}  className=' p-4  w-20 rounded-xl text-white bg-black'>
                resume
              </button>}
              <button onClick={handleReset} className=' p-4 w-16 rounded-xl text-white bg-black'>
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}


export default Counter;
