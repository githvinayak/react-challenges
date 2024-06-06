import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Carousel() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchItems = async () => {
    setLoading(true);
    const url = "https://www.reddit.com/r/aww/top/.json?t=all";
    const res = await fetch(url);
    const result = await res.json();
    const data = result.data.children;
    const list = data
      .filter((item) => item.data.url_overridden_by_dest.includes("jpg"))
      .map((item) => item.data.url_overridden_by_dest);
    setImages(list);
    setLoading(false);
  };

  const handleClick = (dir) => {
    const lastIdx = images.length - 1;
    if (dir === "left") {
      if (index === 0) {
        setIndex(lastIdx);
      } else {
        setIndex((idx) => idx - 1);
      }
    } else if (dir === "right") {
      if (index === lastIdx) {
        setIndex(0);
      } else {
        setIndex((idx) => idx + 1);
      }
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    const tid = setInterval(() => {
      handleClick("right");
    }, 3000);

    return () => {
      clearInterval(tid);
    };
  }, [index]);
  return (
    <>
      <div className='h-screen flex justify-center w-full items-center'>
        {loading ? (
          <div>..loading</div>
        ) : (
          <div className='flex gap-2 h-[400px] w-[500px]'>
            <button
              className=' text-extrabold text-3xl text-black '
              onClick={()=>handleClick("left")}
            >
              <FaArrowLeft />
            </button>
            <img
              className=' object-cover object-center w-full'
              src={images[index]}
            />
            <button
              className=' text-extrabold text-3xl'
              onClick={()=>handleClick("right")}
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Carousel;
