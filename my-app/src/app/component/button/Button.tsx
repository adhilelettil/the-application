'use client'
import "../button/button.css"
import { useRouter } from 'next/navigation';
import React from 'react';
import "./button.css";

export default function Button() {
  const router = useRouter();

  return (
    <div>
      <button className="btn btn-filter btn-warning same-size" onClick={() => {
        router.push(`/Product/?itm=men's clothing `)
      }}>
        men's clothing
      </button><br />
      <button className="btn btn-filter btn-warning same-size" onClick={() => {
        router.push('/Product/?itm=electronics')
      }}>
        electronics
      </button><br />
      <button className="btn btn-filter btn-warning same-size" onClick={() => {
        router.push(`/Product/?itm=women's clothing`)
      }}>
       women's clothing
      </button>
    </div>
  )
}