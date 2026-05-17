import React from 'react';
import Table from './components/Table';
import MapLegend from './components/MapLegend';

const mockTables = [
  { id: 1, table_name: 'T1', capacity: 2, is_occupied: false },
  { id: 2, table_name: 'T2', capacity: 4, is_occupied: true },
  { id: 3, table_name: 'T3', capacity: 6, is_occupied: false },
  { id: 4, table_name: 'B1', capacity: 2, is_occupied: false },
];

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>TableLogic Customer Map</h1>
      <MapLegend />
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px' }}>
        {mockTables.map(table => (
          <Table key={table.id} {...table} />
        ))}
      </div>
    </div>
  );
}

export default App;