// Import necessary libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: 'p-4 max-w-7xl mx-auto',
  header: 'text-2xl font-bold mb-6 text-center',
  grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6',
  card: 'border rounded-lg shadow p-6 text-center hover:bg-gray-100 cursor-pointer transition',
};

const Adminn = () => {
  const navigate = useNavigate();

  const sections = [
    { name: 'Students', description: 'Manage student details and records' },
    { name: 'Warden', description: 'Oversee warden management' },
    { name: 'Canteen', description: 'Handle canteen services and menus' },
    { name: 'Laundry', description: 'Manage laundry services', link: '/laundryorder' },
    { name: 'Room', description: 'Allocate and maintain room details' },
    { name: 'Payment', description: 'Track and manage payments' },
    { name: 'Notification', description: 'Send alerts and notifications' },
    { name: 'Feedback', description: 'Gather and view feedback' },
    { name: 'Hostel', description: 'View hostel overview and information' },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>Hostel Management System</header>
      <div className={styles.grid}>
        {sections.map((section, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => section.link && navigate(section.link)}
          >
            <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
            <p className="text-sm text-gray-600">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adminn;
