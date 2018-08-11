import React from "react";

export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""} p-0`}>
    {children}
  </div>
);
