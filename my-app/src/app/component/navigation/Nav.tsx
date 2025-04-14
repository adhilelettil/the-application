import React from 'react';
import Link from 'next/link';

export default function Nav() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link href="#" className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link href="/Product" className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link href="/About_us" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link href="/Contact_us" className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item" style={{ marginLeft: "1000px" }}>
                <Link href="/Cart" id='cartname' className="nav-link"><img height={"25px"} width={"25px"} src="/Screenshot 2025-04-14 194510.png" className="d-block w-100" alt="..."/></Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
