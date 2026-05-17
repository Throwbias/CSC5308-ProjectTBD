import React from 'react';

export default function MapLegend() {
  return (
    <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', padding: '10px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
      <strong>Legend:</strong>
      <span style={{ color: '#22c55e', fontWeight: 'bold' }}>🟢 Available</span>
      <span style={{ color: '#ef4444', fontWeight: 'bold' }}>🔴 Occupied</span>
    </div>
  );
}