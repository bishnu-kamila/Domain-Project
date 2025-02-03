import React from "react";

const orders = [
  { id: 1, date: "2025-02-01", name: "John Doe", clothes: 10 },
  { id: 2, date: "2025-02-02", name: "Jane Smith", clothes: 15 },
  { id: 3, date: "2025-02-01", name: "Alice Johnson", clothes: 7 },
  { id: 4, date: "2025-02-03", name: "Bob Brown", clothes: 12 },
];

const sortedOrders = orders.sort((a, b) => new Date(a.date) - new Date(b.date));

const LaundryOrders = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Laundry Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Student Name</th>
              <th className="py-2 px-4 text-left">Number of Clothes</th>
            </tr>
          </thead>
          <tbody>
            {sortedOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2 px-4">{order.date}</td>
                <td className="py-2 px-4">{order.name}</td>
                <td className="py-2 px-4">{order.clothes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LaundryOrders;
