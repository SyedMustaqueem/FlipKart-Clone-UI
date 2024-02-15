import React, { useState } from 'react';

const VerifyForm = () => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Verification Code:', verificationCode);
    // You can add your form submission logic here
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded mt-28 px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="verificationCode">
            Verify OTP
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
            id="verificationCode"
            type="text"
            placeholder="Enter Your OTP"
            value={verificationCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 w-full px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifyForm;