import { useState } from "react";

function App() {
  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Your Name...",
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
      buttonName: "Next",
      placeholder: "Your Email...",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeholder: "",
    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      buttonName: "Submit",
      placeholder: "",
    },
  ];
  const [forms, setForms] = useState(data);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      console.log("Form submitted");
      setIsFormSubmitted(true);
    } else {
      setIndex((idx) => idx + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  };

  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    const copyFormData = { ...formData };
    copyFormData[id] = val;
    setFormData(copyFormData);
  };
  console.log("formData-> ", formData);

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      {!isFormSubmitted ? (
        <form className='flex items-start gap-4 flex-col' onSubmit={handleSubmit}>
          {index > 0 && (
            <a href='/' onClick={handleBack}>
              Back
            </a>
          )}
          <label className="text-lg font-medium">{forms[index].label}</label>
          <input
            required
            value={formData[forms[index].id]}
            id={forms[index].id}
            onChange={handleInputChange}
            type={forms[index].inputType}
            placeholder={forms[index].placeholder}
            className="px-3 py-1 border-2 border-gray-500 rounded-lg"
          />
          <button className="px-5 py-2 bg-purple-500 text-white rounded-lg">{forms[index].buttonName}</button>
        </form>
      ) : (
        <div>
      <h1>Success !</h1>
      <hr />
      <span>Name : {formData.name}</span>
      <br />
      <span>Email : {formData.email}</span>
      <br />
      <span>dob : {formData.dob}</span>
      <br />
      <span>password : {formData.password}</span>
      <br />
    </div>
      )}
    </div>
  );
}

export default App;
