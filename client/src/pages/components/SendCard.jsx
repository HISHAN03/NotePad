// components/SendCard.js

import React, { useState } from "react";

const SendCard = () => {
  const [message, setMessage] = useState("");
  const [roomNo, setRoomNo] = useState(null);
  const handleSend = () => {
    fetch("http://localhost:4000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: message }), // Move 'description' to the 'body' property
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response:", data.id);
        setRoomNo(data.id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="p-8 m-10 rounded-lg mockup-code glass">
     
      <h2 className="text-xl font-bold mb-4"> Send text</h2>
      <textarea className="textarea  mb-5" type="text"
        placeholder="Enter your message"
      
        style={{ width: "100%", height:"200px" }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}></textarea>

      <button
        className="btn btn-neutral"
        onClick={handleSend}
      >
        Send
      </button>
      {roomNo && <p className="mt-2 text-green-500">The room no is {roomNo}</p>}
    </div>
  );
};

export default SendCard;
