import React, { useState } from "react";
import AccordianData from "./AccordianData";

const Accordian = () => {
  const data = [
    {
      Question: "How long does shipping tak",
      Answer: "Our standard shipping usually takes 3-5 business days within the continental US. For international orders, delivery times may vary.",
    },
    {
      Question: "What payment methods do you accept?",
      Answer:
        "We accept credit/debit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay.",
    },
    {
      Question: " How should I care for my new shoes?",
      Answer:
        "To keep your shoes looking great, wipe them with a damp cloth and avoid prolonged.",
    },
    {
      Question: "How do I find the right size?",
      Answer:
        "Please refer to our size chart on the product page. If you’re still unsure, feel free to.",
    },
  ];
  return (
    <>
      <main className="h-screen w-full flex flex-col justify-center  bg-slate-800 items-center">
        <h1 className="text-[35px] font-bold py-4 text-white text-center">Accordian</h1>
      <div className=" gap-3  flex flex-col w-1/2 px-16 py-10 rounded-2xl bg-slate-700">
        {data.map((item,idx) => (
            <AccordianData items={item} index={idx}  />
        ))}
      </div>
      </main>
    </>
  );
};

export default Accordian;
