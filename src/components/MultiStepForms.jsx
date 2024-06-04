import React, { useState } from "react";

const data = [
  {
    id: "name",
    label: "Name",
    inputType: "text",
    button: "Next",
  },
  {
    id: "email",
    label: "Email",
    inputType: "email",
    button: "Next",
  },
  {
    id: "date",
    label: "Date of Birth",
    inputType: "date",
    button: "Next",
  },
  {
    id: "password",
    label: "Password",
    inputType: "password",
    button: "Submit",
  },
];

const MultiStepForms = () => {
  const [forms, setForms] = useState(data);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const handleIndex = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      alert(JSON.stringify(formData));
    } else {
      setIndex((idx) => idx + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  };

  const handleForm = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    const copyForm = { ...formData };
    copyForm[id] = val;
    setFormData(copyForm);
  };
  return (
    <>
      <div className=' w-full h-screen flex flex-col justify-center items-center gap-2'>
        <h1 className=' font-bold text-4xl'>Multi Step Form</h1>
        <form
          onSubmit={handleIndex}
          className='flex flex-col gap-4 items-start justify-center'
        >
          {index > 0 && (
            <a onClick={handleBack} href='/'>
              Back
            </a>
          )}
          <label className='font-bold text-lg' htmlFor=''>
            {forms[index].label}
          </label>
          <input
           value={formData[forms[index].id]}
            id={forms[index].id}
            onChange={handleForm}
            className='px-4 py-2 border-2 w-[250px] border-gray-400 rounded-lg'
            type={forms[index].inputType}
            required
          />
          <button className=' rounded-lg bg-purple-600 text-white text-base py-2 px-4'>
            {forms[index].button}
          </button>
        </form>
      </div>
    </>
  );
};

export default MultiStepForms;
