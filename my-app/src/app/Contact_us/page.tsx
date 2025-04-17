import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css';

export default function Contact_us() {
  return (
    <div className="container mt-4">
      <div className="row align-items-center">
        <div className="col-md-6 contact-image">
          <img src="/contact.avif" alt="Contact Us" className="img-fluid rounded" />
        </div>
        <div className="col-md-6 contact-text">
          <h1>Contact Us</h1>
          <b>
            If you encounter any issues, please don't hesitate to contact us.
            We're here to assist, and we strive for your complete satisfaction.
            If you have any questions or concerns, please reach out to us. We
            are always available to help. Your feedback is valuable to us. If
            you experience any problems, please let us know so we can improve
            and better serve you.
          </b>
        </div>
      </div>
    </div>
  );
}