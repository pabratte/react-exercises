import React, { useState } from 'react';

export default function ShoppingList() {
  // Los datos ya están cargados en el estado
  const [items] = useState([
    { id: 1, name: 'Pan integral', category: 'Panadería' },
    { id: 2, name: 'Leche de almendras', category: 'Lácteos' },
    { id: 3, name: 'Café en grano', category: 'Almacén' },
    { id: 4, name: 'Manzanas', category: 'Frutería' }
  ]);

  const listContainerStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
  };

  const itemStyle = {
    padding: '10px',
    borderBottom: '1px solid #eee',
    display: 'flex',
    justifyContent: 'space-between'
  };

  return (
    <div style={listContainerStyle}>
      <h2 style={{ borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        🛒 Lista de Compras
      </h2>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {/* 1. RETO: Usa items.map() para mostrar cada producto */}
        {/* Pista: 
            { items.map((item) => ( 
               <li key={...}> ... </li> 
            )) } 
        */}
        
        {/* 2. DENTRO DEL LI: Muestra el 'name' y la 'category' */}
      </ul>

      <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '20px' }}>
        Total de productos: { /* 3. RETO EXTRA: Mostrar el largo del array items */ }
      </p>
    </div>
  );
}