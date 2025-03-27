
import React, { useState } from 'react';

const Payment = () => {
const feesDue = 2000
const handlePayment = true
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Fee Payment Portal</h1>
        <ul className="list-disc list-inside mb-4">
          <li className="text-lg">Remaining Fees:₹{feesDue}</li>
        </ul>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
