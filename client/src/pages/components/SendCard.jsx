// components/SendCard.js

import React, { useState } from 'react';

const SendCard = () => {
  const [message, setMessage] = useState('');
  const [roomNo, setRoomNo] = useState(null);
  const handleSend = () => {
    fetch('http://localhost:4000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: message }), // Move 'description' to the 'body' property
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data.id);
        setRoomNo(data.id);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  






  
  return (
    <div className="border p-6 mb-6">
      <h2 className="text-lg font-bold mb-4">Send Card</h2>
      <input
        type="text"
        placeholder="Enter your message"
        className="border p-3 w-full mb-4 text-black"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-3 rounded"   onClick={handleSend}>Send</button>
      {roomNo && (
        <p className="mt-2 text-green-500">The room no is {roomNo}</p>
      )}
    </div>
  );
};

export default SendCard;
