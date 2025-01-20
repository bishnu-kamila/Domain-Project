// Import necessary libraries
import React from 'react';

// Tailwind CSS styling
const styles = {
  container: 'p-4 max-w-7xl mx-auto',
  header: 'text-2xl font-bold mb-6 text-center',
  grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
  card: 'border rounded-lg shadow p-6 text-center hover:bg-gray-100 cursor-pointer transition',
  button: 'mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition',
};

// Functional Component
const Adminn = () => {
  const sections = [
    { name: 'Students', description: 'Manage student details and records' },
    { name: 'Warden', description: 'Oversee warden management' },
    { name: 'Canteen', description: 'Handle canteen services and menus' },
    { name: 'Laundry', description: 'Organize laundry services' },
    { name: 'Room', description: 'Allocate and maintain room details' },
    { name: 'Payment', description: 'Track and manage payments' },
    { name: 'Notification', description: 'Send alerts and notifications' },
    { name: 'Feedback', description: 'Gather and view feedback' },
    { name: 'Hostel', description: 'View hostel overview and information' },
    { name: 'Registration', description: 'Handle new user registrations' },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>Hostel Management System</header>
      <div className={styles.grid}>
        {sections.map((section, index) => (
          <div key={index} className={styles.card}>
            <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
            <p className="text-sm text-gray-600">{section.description}</p>
            <button className={styles.button}>Go to {section.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adminn;