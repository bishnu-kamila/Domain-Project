// Importing required modules
import React, { useState } from "react";

const Canteen = () => {
  // State for managing today's items
  const [todaysItems, setTodaysItems] = useState([
    "Pasta",
    "Grilled Chicken",
    "Mixed Veg Salad",
    "Rice & Curry",
    "Dessert - Gulab Jamun",
  ]);

  // State for leave request
  const [leaveStartDate, setLeaveStartDate] = useState("");
  const [leaveEndDate, setLeaveEndDate] = useState("");

  // Function to handle leave submission
  const handleLeaveSubmit = () => {
    if (!leaveStartDate || !leaveEndDate) {
      alert("Please select both start and end dates.");
      return;
    }

    alert(`Leave requested from ${leaveStartDate} to ${leaveEndDate}.`);
    setLeaveStartDate("");
    setLeaveEndDate("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Canteen Management</h1>

      {/* Today's Items Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Today's Items</h2>
        <ul className="list-disc list-inside text-gray-700">
          {todaysItems.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Leave Request Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leave Request</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Start Date */}
          <div>
            <label
              htmlFor="leaveStartDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Start Date
            </label>
            <input
              id="leaveStartDate"
              type="date"
              value={leaveStartDate}
              onChange={(e) => setLeaveStartDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* End Date */}
          <div>
            <label
              htmlFor="leaveEndDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              End Date
            </label>
            <input
              id="leaveEndDate"
              type="date"
              value={leaveEndDate}
              onChange={(e) => setLeaveEndDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <button
          onClick={handleLeaveSubmit}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Leave Request
        </button>
      </div>
    </div>
  );
};

export default Canteen;
