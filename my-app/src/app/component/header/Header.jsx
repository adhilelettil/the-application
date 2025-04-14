"use client"
import React, { useState } from 'react';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearch(e) {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div style={{ height: "100px", backgroundColor: "black" }}>
      <img src="/logo.png" alt="Logo" style={{ height: "100px" }} />
     
    </div>
  );
}