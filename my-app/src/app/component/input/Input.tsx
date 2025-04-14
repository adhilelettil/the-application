"use client"

import React, { useState } from 'react'

export default function Input(props: any) {
  const [searchTerm, setSearchTerm] = useState('');
  const serchproduct=props.searchProduct

 

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
    // console.log(e.target.value);
    serchproduct(searchTerm)
   
  }

  return (
    <div>
      <input
      className ="form-control me-2 "
      

        onChange={handleSearch}
        type="text"
        placeholder="Search"
        style={{ height: "40px", width: "500px", marginLeft: "200px", marginTop:"10px" }}
        value={searchTerm}
      />
    </div>
  )
}
