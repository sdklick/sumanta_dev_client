import React from "react";
import "../styles/battery.css";
import { useBattery } from "@uidotdev/usehooks";

const Battery = () => {
  const { level, charging} = useBattery();
  return (
    <>
     <div className="battery">
      <div className="battery-level" style={{ width: `${level * 100}%` }}></div>
      <div className="percentage">{level * 100}{charging ? "⚡" : "%"}</div>
    </div>
    </>
   

  );
};

export default Battery;
