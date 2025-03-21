import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || '');

  const handleResetPassword = () => {
    window.location.href = 'https://mail.google.com/mail/logout';
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Forget Password</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleResetPassword}
              className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-200"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
