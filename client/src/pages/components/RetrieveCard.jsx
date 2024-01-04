// components/RetrieveCard.js

import React, { useState } from 'react';



const RetrieveCard = () => {
    const [smallInput, setSmallInput] = useState('');
    const [bigInput, setBigInput] = useState('');


    const handleClick = () => {
        fetch('http://localhost:4000/retrieve', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: smallInput }),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Response:', data);
    
            // Update the content in the bigger input
            setBigInput(data.description || ''); // Assuming the response has a 'description' field
          })
          .catch(error => {
            console.error('Error:', error);
          });
      };






  return (
    <div className="border p-6 mb-6">
      <h2 className="text-lg font-bold mb-4">Retrieve Card</h2>
      <div className="flex mb-4">
      <input
          type="text"
          placeholder="Small Input"
          className="border p-3 mr-2 text-black"
          value={smallInput}
          onChange={(e) => setSmallInput(e.target.value)}
        />
        <button className="bg-green-500 text-white p-3 rounded" onClick={handleClick}>Retrieve</button>
      </div>
      <input
        type="text"
        placeholder="Bigger Input"
        className="border p-3 w-full mb-4 text-black"
        value={bigInput}
        readOnly
      />
    </div>
  );
};

export default RetrieveCard;
