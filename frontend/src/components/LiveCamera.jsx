import React from "react";
import { getCameraStream } from "../api";

export default function LiveCamera() {
  return (
    <div>
      <h3>Live Camera Detection</h3>
      <img
        src={getCameraStream()}
        alt="Live Camera"
        style={{
          marginTop: "1rem",
          maxWidth: "800px",
          border: "2px solid #ccc",
        }}
      />
    </div>
  );
}
