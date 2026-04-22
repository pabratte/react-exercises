import React from 'react';
import UserCard from './UserCard';

export default function App() {
  const userData = {
    name: "Alex Smith",
    role: "Frontend Developer",
    isOnline: true
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Miembros del Equipo</h1>
      
      {/* 1. EL RETO: Pasa los datos de userData al componente como props */}
      {/* Pista: userName={userData.name} ... */}
      <UserCard 
        
      />
    </div>
  );
}