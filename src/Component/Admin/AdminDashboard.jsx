import React from "react";

const sections = [
  { name: "Student", color: "bg-blue-500" },
  { name: "Warden", color: "bg-green-500" },
  { name: "Canteen", color: "bg-yellow-500" },
  { name: "Laundry", color: "bg-purple-500" },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
        {sections.map((section) => (
          <div
            key={section.name}
            className={`p-6 rounded-lg shadow-lg text-white text-center text-xl font-semibold cursor-pointer transition-transform transform hover:scale-105 ${section.color}`}
            onClick={() => alert(`${section.name} Section Clicked`)}
          >
            {section.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
