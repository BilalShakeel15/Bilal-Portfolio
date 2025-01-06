import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-center p-3">
      {/* First Line: Social Media Icons */}
      <div>
        <span className="d-block mb-2" style={{color:"#0bc6d4",fontWeight:"bold"}}>Find me on:</span>
        <a
  href="https://www.linkedin.com/in/bilalshakeel15/"
  className="btn text-white btn-floating m-1"
  style={{
    backgroundColor: "transparent",
    width: "40px",        // Set width and height for circular shape
    height: "40px",
    borderRadius: "50%",  // Make it circular
    border:"2px solid #0bc6d4",
  }}
  role="button"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fab fa-linkedin-in" style={{ color: "#0bc6d4" }}></i>
</a>
        <a
          href="https://github.com/BilalShakeel15"
          className="btn text-white btn-floating m-1"
          style={{
            backgroundColor: "transparent",
            width: "40px",        // Set width and height for circular shape
            height: "40px",
            borderRadius: "50%",  // Make it circular
            border:"2px solid #0bc6d4",
          }}
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" style={{ color: "#0bc6d4" }}></i>
        </a>
        <a
          href="mailto:bilalshakeel.ahmed15@gmail.com"
          className="btn text-white btn-floating m-1"
          style={{
            backgroundColor: "transparent",
            width: "40px",        // Set width and height for circular shape
            height: "40px",
            borderRadius: "50%",  // Make it circular
            border:"2px solid #0bc6d4",
          }}
          role="button"
        >
          <i className="fas fa-envelope" style={{ color: "#0bc6d4" }}></i>
        </a>
        <a
          href="mailto:bilal.shakeel732@outlook.com"
          className="btn text-white btn-floating m-1"
          style={{
            backgroundColor: "transparent",
            width: "40px",        // Set width and height for circular shape
            height: "40px",
            borderRadius: "50%",  // Make it circular
            border:"2px solid #0bc6d4",
          }}
          role="button"
        >
          <i className="fas fa-envelope" style={{ color: "#0bc6d4" }}></i>
        </a>
      </div>

      {/* Second Line: Copyright */}
      <div className="text-center mt-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)",color:"rgba(255, 255, 255, 0.7)" }}>
      Copyright © 2025 All rights reserved{" "}
        
      </div>
    </footer>
  );
}

export default Footer;
