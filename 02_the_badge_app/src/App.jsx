import React, { useState } from 'react';

export default function App() {
  // 1. RETO: Crea un estado llamado 'name' iniciado como un string vacío ""
  // Pista: const [name, setName] = useState("");

  const handleInputChange = (event) => {
    // 2. RETO: Actualiza el estado 'name' con el valor del input
    // Pista: El valor está en event.target.value
  };

  const badgeStyle = {
    width: '300px',
    padding: '20px',
    borderRadius: '15px',
    backgroundColor: '#f0f0f0',
    border: '2px solid #3498db',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '50px' }}>
      
      {/* Entrada de datos */}
      <input 
        type="text" 
        placeholder="Escribe tu nombre aquí..."
        onChange={handleInputChange}
        style={{ padding: '10px', fontSize: '1rem', width: '250px' }}
        /* 3. RETO (Opcional): Vincula el value del input al estado 'name' */
      />

      {/* La Tarjeta (Badge) */}
      <div style={badgeStyle}>
        <small style={{ color: '#7f8c8d', textTransform: 'uppercase' }}>Hola, mi nombre es:</small>
        <h2 style={{ color: '#2c3e50', margin: '10px 0' }}>
          { "ALUMNO" /* 4. RETO: Mostrar la variable 'name' aquí. Si está vacío, mostrar "..." */ }
        </h2>
      </div>

    </div>
  );
}
