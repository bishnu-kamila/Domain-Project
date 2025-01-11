
import React from 'react';

const Home = () => {
  return (
    <div
      className="mt-[20px] h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/beds-hostel-affordable-housing-36997317.jpg')" }} // Replace with your image URL
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Hostel Management System</h1>
        <p className="text-lg text-gray-300">Efficient, organized, and user-friendly system for managing hostel operations.</p>
      </div>
    </div>
  );
};

export default Home;
