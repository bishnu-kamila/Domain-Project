
import React, { useState } from 'react';

const Laundry = () => {
  const [clothes, setClothes] = useState(0);
  const handleOrder = () => {
    alert(`You have ordered laundry for ${clothes} clothes.`);
    setClothes(0); 
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6"
      style={{
        backgroundImage: 'url("./Laundrybg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6 bg-white/70 px-4 py-2 rounded-lg">
        Laundry Service
      </h1>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <label htmlFor="clothes" className="block text-gray-700 text-sm font-bold mb-2">
          Number of Clothes
        </label>
        <input
          id="clothes"
          type="number"
          min="0"
          value={clothes}
          onChange={(e) => setClothes(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <button
          onClick={handleOrder}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default Laundry;
