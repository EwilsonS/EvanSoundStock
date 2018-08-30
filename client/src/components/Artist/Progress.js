import React from "react";

const Progress = () => (
  <div className="progress">
    <div
      className="progress-bar bg-info rounded-0 "
      role="progressbar"
      style={{width: "25%"}}
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      25% invested
    </div>
  </div>
);

export default Progress;