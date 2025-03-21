import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-9xl font-extrabold text-red-500">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
