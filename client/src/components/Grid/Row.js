import React from "react";

export const Row = ({ fluid, children }) => (
  <div className={`row${fluid ? "-fluid" : ""} p-0 m-0`}>
    {children}
  </div>
);
