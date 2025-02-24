import React, { useState } from 'react';
import './App.css';

function CanteenDashboard() {
  const [menu, setMenu] = useState('');

  const updateMenu = (e) => {
    setMenu(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Today's menu updated to: ${menu}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Canteen Dashboard</h1>

      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Update Today's Menu</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            value={menu}
            onChange={updateMenu}
            placeholder="Enter today's menu"
            className="border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Update Menu
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Student Attendance</h2>
          <p className="text-gray-600">Track student attendance for today.</p>
          <button
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Check Attendance
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Notifications</h2>
          <p className="text-gray-600">View latest announcements and updates.</p>
          <button
            className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
          >
            View Notifications
          </button>
        </div>
      </div>
    </div>
  );
}

export default CanteenDashboard;
