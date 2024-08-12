import { useState, useEffect } from "react";

export const SearchBar = () => {
  const [value, setValue] = useState("");
  const items = [
    {
      name: "ritik",
      email: "ritik@gmail.com",
    },
    {
      name: "mridul",
      email: "mridul@gmail.com",
    },
  ];

  const handleInput = (e) => {
    setValue(e.target.value.toLowerCase());
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(value)
  );
  useEffect(() => {
    console.log("component rendered .");
  }, []);
  return (
    // <div className='App'>
    //   <input
    //     className=' border-2 border-black rounded-lg px-4 py-2'
    //     type='text'
    //     placeholder='enter value'
    //     value={value}
    //     onChange={handleInput}
    //   />
    //   {value.length >=2  && (
    //     <div>
    //       {item.map((i, index) => (
    //         <span>
    //           {value === i.name ? (
    //             <>
    //               <p className=' text-red-500'>{i.name}</p>{" "}
    //               <p className=' text-red-500'>{i.email}</p>
    //             </>
    //           ) : (
    //             ""
    //           )}
    //         </span>
    //       ))}
    //     </div>
    //   )}

    // </div>
    <div className='App'>
      <input
        type='text'
        placeholder='Search by name'
        onChange={handleInput}
        value={value}
      />
      {value && (
        <div>
          {filteredItems.map((item, index) => (
            <p key={index} className='text-red-500'>
              {item.name}: {item.email}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
