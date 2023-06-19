import React from "react";
import "./styles.css";

function Test() {
  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://via.placeholder.com/300x300.png"
          alt="placeholder"
          className="image"
        />
        <div className="overlay">
          <h2 className="text">Hover Text</h2>
        </div>
      </div>
    </div>
  );
}

export default Test;
