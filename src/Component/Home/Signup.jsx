import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="border-2 bg-gray-300 px-6 py-8 sm:px-10 sm:py-10 rounded-3xl shadow-md w-[90%] sm:w-[400px]">
          <h1 className="text-3xl sm:text-5xl font-semibold text-center">Register</h1>
          <p className="font-medium text-sm sm:text-lg mt-4 text-center">
            Welcome! Please enter your details to sign up.
          </p>
          <div className="mt-8">
            <div className="space-y-6">
              <div>
                <label className="block font-medium text-sm sm:text-lg mb-2">Email</label>
                <input
                  className="w-full h-10 border-2 border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="email"
                  placeholder="Enter your Email ID"
                />
              </div>
              <div>
                <label className="block font-medium text-sm sm:text-lg mb-2">Password</label>
                <input
                  className="w-full h-10 border-2 border-gray-300 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="password"
                  placeholder="Enter your Password"
                />
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <Link to="/adminn">
                <button className="w-full bg-blue-500 text-white font-medium rounded-xl h-10 hover:bg-blue-600 transition">
                  Sign-Up
                </button>
              </Link>
              <button className="w-full bg-gray-400 text-white font-medium rounded-xl h-10 hover:bg-gray-500 transition">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
