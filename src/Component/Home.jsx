// Import necessary libraries
import React, { useState } from 'react';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate login functionality
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Simulate logout functionality
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {!isLoggedIn ? (
        <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Login</h1>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
        </div>
      ) : (
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Home Page!</h1>
          <p className="text-gray-600 mb-4">You are successfully logged in.</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
