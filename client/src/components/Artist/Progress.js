import React from "react";

const Progress = () => (
  <div className="progress">
    <div
      className="progress-bar"
      role="progressbar"
      style={{width: "50%"}}
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      50% invested
    </div>
  </div>
);

export default Progress;