// Import necessary modules
import React, { useState } from 'react';
// import Razorpay from 'razorpay';

// Tailwind CSS Styles
const Payment = () => {
  const [feesDue, setFeesDue] = useState(5000); 

  const handlePayment = () => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY', 
      amount: feesDue * 100, 
      currency: 'INR',
      name: 'Fee Payment',
      description: 'Payment for remaining fees',
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        setFeesDue(0); // Set fees to 0 after successful payment
      },
      prefill: {
        name: 'Student Name', 
        email: 'student@example.com', 
        contact: '9999999999', 
      },
      theme: {
        color: '#4F46E5',
      },
    };

    const rzp = new Razorpay(options);
    rzp.on('payment.failed', function (response) {
      alert(`Payment failed! Error: ${response.error.description}`);
    });

    rzp.open();
  };
const feesDue = 1000
const handlePayment = "Done"

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Fee Payment Portal</h1>
        <ul className="list-disc list-inside mb-4">
          <li className="text-lg">Remaining Fees: ₹{feesDue}</li>
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
