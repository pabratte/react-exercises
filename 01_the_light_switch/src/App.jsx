import React, { useState } from 'react';

export default function App() {
  // 1. RETO: Crea un estado llamado 'isOn' que sea booleano (true/false)
  // Pista: const [isOn, setIsOn] = useState(false);
  
  const handleToggle = () => {
    // 2. RETO: Cambia el valor de 'isOn' a su contrario usando setIsOn
  };

  const containerStyle = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.4s ease',
    // 3. RETO: Usa un ternario para que el color sea 'gold' si está encendido 
    // y '#2c3e50' (gris oscuro) si está apagado.
    backgroundColor: '#2c3e50', 
    color: 'white',
    fontFamily: 'sans-serif'
  };

  return (
    <div style={containerStyle}>
      <h1>La luz está { "APAGADA" /* 4. RETO: Mostrar texto dinámico */ }</h1>
      
      <button 
        onClick={handleToggle} 
        style={{ 
          padding: '10px 25px', 
          fontSize: '1rem', 
          cursor: 'pointer',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: 'white',
          color: 'black'
        }}
      >
        Presionar Interruptor
      </button>
    </div>
  );
}