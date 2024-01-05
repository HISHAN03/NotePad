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
    <div className="p-8 m-10 rounded-lg mockup-code glass">
      <h2 className="text-lg font-bold mb-4">Retrieve Card</h2>
      <textarea
        className="textarea  mb-5" type="text"
        
      
        style={{ width: "100%", height:"200px" }}
        value={bigInput}
        readOnly
      ></textarea>
      <div className="flex mb-4">
      <input
          type="text"
          placeholder="Small Input"
          className="input w-full max-w-xs"
          value={smallInput}
          onChange={(e) => setSmallInput(e.target.value)}
        />
        <button className="btn btn-neutral ml-3" onClick={handleClick}>Retrieve</button>
      </div>
    </div>
  );
};

export default RetrieveCard;
