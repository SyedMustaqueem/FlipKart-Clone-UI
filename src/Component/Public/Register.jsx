// import React from 'react'

// const Register = ({role}) => {
// const[username,setUserName]=useState("");
// const[password,setPassword]=useState("");
    
//     const respond=(event) =>{
//       event.preventDefault();
//       console.log(username);
//       console.log(password);
//       console.log(role);

//     }

//   return (
//     <div className='flex justify-center items-center h-svh text-7xl and text-slate-700'>
//       <input type='text' onChange={(event)=>setUserName(event.target.value)}
//       className='border-2 text-base'/>
//       <input type='text' onChange={(event)=>setPassword(event.target.value)}
//       className='border-2 text-base'/>
//       <button onClick={respond} className='border-2 text-base'>submit</button>
//     </div>
//   )
// }

// export default Register
import React, { useState } from 'react';

const RegisterForm = ({role}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(role);
    // You can add your form submission logic here
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <form onSubmit={handleSubmit} className="bg-slate-400  shadow-md justify-center rounded mt-28 px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;