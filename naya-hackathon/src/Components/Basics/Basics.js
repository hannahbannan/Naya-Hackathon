import React from "react";
import "./Basics.css";

function Basics() {
  return (
    <div className="Basics">
      <h1>Design Brief</h1>
      <div className="bubble">
        <h4>Furniture Item:</h4> <p>Table</p>
      </div>
      <div className="bubble">
        <h4>Room:</h4> <p>Dining Room</p>
      </div>
      <div className="bubble">
        <h4>Use For:</h4> <p>Casual eating with family and guests</p>
      </div>
      <div className="bubble">
        <h4>Dimensions:</h4> <p>120" x 40"</p>
      </div>
      <div className="bubble">
        <h4>Quantity:</h4> <p>1</p>
      </div>
      <div className="bubble">
        <h4>Shipping Address:</h4> <p>1234 Main St, Los Angeles, CA 90069</p>
      </div>
      <div className="bubble">
        <h4>Budget:</h4> <p>$1 to $2,000</p>
      </div>
      <div className="bubble">
        <h4>Timeframe:</h4> <p>1-3 months</p>
      </div>
      <div className="bubble">
        <h4>Story:</h4>
        <p>
          I want a custom dining room table to use for my family meals. I want a
          sleek, modern design but also kid friendly. My house is modern
          nautical, so I was thinking a long oak table with rounded edges, and a
          streak of blue epoxy or paint running down the middle to look like
          water.
        </p>
      </div>
    </div>
  );
}

export default Basics;
