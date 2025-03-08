import React from 'react';

function Warden() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-blue-500 text-white text-center py-4 rounded-md shadow-md mb-6">
        <h1 className="text-2xl font-bold">Warden Dashboard </h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <section className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Room Info</h2>
          <p className="text-gray-600">Manage room details here.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            View Rooms
          </button>
        </section>
        <section className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Student Info</h2>
          <p className="text-gray-600">Manage student details here.</p>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            View Students
          </button>
        </section>

        <section className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Attendance</h2>
          <p className="text-gray-600">Track attendance records here.</p>
          <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
            View Attendance
          </button>
        </section>

        <section className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Canteen Info</h2>
          <p className="text-gray-600">Manage canteen details here</p>
          <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
            View Canteen
          </button>
        </section>
      </main>
    </div>
  );
}

export default Warden;
