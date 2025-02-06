import React, { useState } from "react";

const RoomInfo = () => {
  const [roomNumber, setRoomNumber] = useState("");
  const [roomData, setRoomData] = useState(null);
  const [error, setError] = useState(null);

  const fetchRoomData = async () => {
    try {
      const response = await fetch(`/api/rooms/${roomNumber}`);
      if (!response.ok) {
        throw new Error("Room not found or server error");
      }
      const data = await response.json();
      setRoomData(data);
      setError(null);
    } catch (err) {
      setRoomData(null);
      setError(err.message);
      
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Room Information</h1>

        <div className="mb-4">
          <label
            htmlFor="roomNumber"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter Room Number:
          </label>
          <input
            type="text"
            id="roomNumber"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            placeholder="e.g., 101"
          />
        </div>

        <button
          onClick={fetchRoomData}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Get Room Info
        </button>

        {error && (
          <div className="mt-4 p-3 text-red-700 bg-red-100 rounded">
            {error}
          </div>
        )}

        {roomData && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Room Details</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Room Number:</span> {roomData.roomNumber}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Hostel Number:</span> {roomData.hostelNumber}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Warden Name:</span> {roomData.wardenName}
            </p>
            <p className="text-gray-700 mb-2 font-medium">Students:</p>
            <ul className="list-disc pl-5">
              {roomData.students.map((student, index) => (
                <li key={index} className="text-gray-700">
                  {student}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomInfo;
