import React from 'react';

// 2. EL RETO: Recibe las props en los paréntesis de la función
// Pista: export default function UserCard({ userName, userRole, status }) { ... }

export default function UserCard(props) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    width: '200px',
    backgroundColor: '#f9f9f9'
  };

  return (
    <div style={cardStyle}>
      {/* 3. EL RETO: Reemplaza los textos fijos por las props */}
      <h3>{ "Nombre Aquí" }</h3>
      <p style={{ color: '#666' }}>{ "Rol Aquí" }</p>
      
      <span style={{ color: "green" /* 4. RETO EXTRA: Si status es true, color verde, si no, rojo */ }}>
        ● { "En línea / Desconectado" }
      </span>
    </div>
  );
}