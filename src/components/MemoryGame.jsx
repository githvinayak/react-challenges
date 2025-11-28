import React, { useEffect, useState } from "react";

const getNums = () => {
  const list = [];
  for (let i = 1; i <= 8; i++) {
    list.push(i);
    list.push(i);
  }
  return list;
};

const MemoryGame = () => {
  const [nums, setNums] = useState(getNums());
  const [stage, setStage] = useState("init");
  const [opened, setOpened] = useState([]);
  const [solved, setSolved] = useState([]);
  const randomNums = () => {
    const copyNums = [...nums];
    return copyNums.sort(() => Math.random() - 0.5);
  };
  const handleStart = () => {
    setStage("start");
    setNums(randomNums());
    setSolved([]);
  };
  const handleClick = (num, index) => {
    if (opened.length === 2) return;
    setOpened((prev) => [...prev, index]);
  };
  console.log("opened" + opened);

  useEffect(() => {
    if (opened.length === 2) {
      setTimeout(() => {
        const id1 = opened[0];
        const id2 = opened[1];
        if (nums[id1] === nums[id2]) {
          setSolved((prev) => [...prev, nums[id1]]);
        }
        setOpened([]);
      }, 3000);
    }
  }, [opened]);
  useEffect(()=>{
    if(solved.length === 8){
      setStage("win")
    }
  },[solved])

  const getClassName = (num, index) => {
    if (solved.includes(num)) {
      return "remove";
    } else if (opened.includes(index)) {
      return "show";
    } else {
      return "hide";
    }
  };
  return (
    <>
      <div className='h-screen w-full flex flex-col justify-start items-center gap-4 pt-14'>
        <h1 className=' text-2xl font-bold'>Memory Game</h1>
        {stage === "init" && (
          <button
            onClick={handleStart}
            className=' text-white px-5 py-2 bg-purple-600 rounded-lg'
          >
            Play Game
          </button>
        )}

        {stage === "start" && (
          <div className=' grid grid-cols-4 gap-3'>
            {nums.map((num, index) => (
              <button
                key={index}
                onClick={() => handleClick(num, index)}
                className={`bg-green-300 px-6 py-4  ${getClassName(
                  num,
                  index
                )}`}
              >
                {num}
              </button>
            ))}
          </div>
        )}
        {stage === "win" && (
          <div>
            <h1 className='text-2xl font-bold'>Congratulations, you won!</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default MemoryGame;
