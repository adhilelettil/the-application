import React from 'react'

export default function  About_us () {
  return (
    <div>
       <div style={{ height: "1000px" }}>
      <div>
        <div style={{ float: "left", alignItems: "center", padding: "30px" }}>
          <img
            src="/1 (1).jpg"
            style={{
              height: "400px",
              width: "800px",
              borderRadius: "20px 20px 20px 20px",
            }}
          />
        </div>
        <div style={{ float: "right", padding: "100px" }}>
          <h2 className="text-primary"> CEO of EZBUY company</h2>
          <div style={{ width: "300px" }}>
            <b>
              JHON is a visionary leader who has been instrumental in shaping
              EZBUY's journey. With a keen eye for innovation and a passion for
              industry, he has spearheaded numerous initiatives that have
              propelled the company to new heights.
            </b>
          </div>
        </div>
      </div>
      
      <div style={{padding:'50px'}}>
        <div style={{ float: "right", alignItems: "center", padding: "30px" }}>
          <img
            src="/0.jpg"
            style={{
              height: "400px",
              width: "800px",
              borderRadius: "20px 20px 20px 20px",
            }}
          />
        </div>
        <div style={{ float: "left", padding: "100px" }}>
          <h2 className="text-primary"> MAINTENANCE </h2>
          <div style={{ width: "300px" }}>
            <b>
            The user-friendly interface makes it easy to find what you need and
            Consistent performance, even during peak times and
            Safe and secure payment options to protect your information so we have given 
            Prompt and helpful support to address any concerns
            </b>
          </div>
        </div>
      </div>

    </div>
  
    </div>
  )
}
