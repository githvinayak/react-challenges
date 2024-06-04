import React, { useEffect, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const ShoppingList = () => {
  const [food, setFood] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [bucket, setBucket] = useState([]);

  const fetchItems = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const result = await fetch(url);
    const data = await result.json();
    setSuggestion(data);
  };
  const handleShoppingList = (e) => {
    const idx = e.target.getAttribute("data-id");
    if (idx) {
      const obj = {
        id: Date.now(),
        data: suggestion[idx],
        isDone: false,
      };
      const copyBucketList = [...bucket];
      copyBucketList.push(obj);
      setBucket(copyBucketList);
      console.log(bucket);
    }
  };

  const handleDelete = (id) => {
   const copyBucketList = [...bucket];
   const filtered = copyBucketList.filter((item) => item.id !== id);
   setBucket(filtered)
  };

  const handleRightClick = (id) => {
    const copyBucketList = [...bucket];
    const newBucket = copyBucketList.map((i) => {
      if (i.id === id) {
        i.isDone = !i.isDone;
      }
      return i;
    });
    setBucket(newBucket);
  };

  useEffect(() => {
    if (food.length >= 2) {
      fetchItems(food);
    }
  }, [food]);
  return (
    <>
      <div className='flex mt-14 flex-col gap-6 justify-start items-center'>
        <h1 className='text-center font-bold text-3xl'>My Shopping List</h1>
        <section className=' max-w-4xl flex flex-col gap-4'>
          <div className='w-full'>
            <input
              className='px-4 py-2 focus:outline-none border-2 border-black'
              type='text'
              placeholder='Enter your value'
              value={food}
              onChange={(e) => setFood(e.target.value)}
            />
          </div>
         { food.length >= 2 ? <div
            onClick={handleShoppingList}
            className='w-full h-fit bg-red-300 overflow-y-scroll'
          >
            {suggestion.map((i, idx) => (
              <div
                data-id={idx}
                key={idx}
                className=' hover:bg-red-200 list-none px-4 capitalize text-white py-1'
              >
                {i}
              </div>
            ))}
          </div> : null}
          <div className='w-full flex flex-col gap-1'>
            {bucket.map((i, idx) => (
              <div className='flex justify-between rounded-lg bg-red-600 text-white px-3 py-2 items-center'>
                <button onClick={() => handleRightClick(i.id)}>
                  <GiCheckMark className='h-5 w-5' />
                </button>{" "}
                <p className={` capitalize ${i.isDone ? "line-through" : ""}`}>
                  {i.data}
                </p>
                <button onClick={()=>handleDelete(i.id)}>
                  <RxCross1 className='h-5 w-5' />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ShoppingList;
