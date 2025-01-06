// Admin Dashboard Page
// Framework: React.js
// Styling: Tailwind CSS

import React from 'react';

const Admin = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white py-4 shadow-md">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                </div>
            </header>

            <main className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Canteen Access */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Canteen Management</h2>
                        <p>Manage student and staff access to canteen services.</p>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                            Go to Canteen Access
                        </button>
                    </div>

                    {/* Student Access */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Student Management</h2>
                        <p>Monitor and control student access to facilities and services.</p>
                        <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
                            Manage Students
                        </button>
                    </div>

                    {/* Warden Access */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Warden Management</h2>
                        <p>Oversee warden roles and permissions.</p>
                        <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-700">
                            Manage Wardens
                        </button>
                    </div>

                    {/* Laundry Management */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Laundry Services</h2>
                        <p>Track and manage laundry services and schedules.</p>
                        <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700">
                            View Laundry Services
                        </button>
                    </div>
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-4 mt-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 Admin Dashboard. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Admin;
