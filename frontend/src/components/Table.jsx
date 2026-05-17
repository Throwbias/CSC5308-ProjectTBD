import React from 'react';

export default function Table({ table_name, capacity, is_occupied }) {
  const bgColor = is_occupied ? '#ef4444' : '#22c55e'; // Red or Green
  
  return (
    <div style={{ 
      backgroundColor: bgColor, 
      padding: '20px', 
      borderRadius: '8px', 
      color: 'white', 
      textAlign: 'center',
      border: '2px solid #1f2937'
    }}>
      <h2>{table_name}</h2>
      <p>Seats: {capacity}</p>
    </div>
  );
}