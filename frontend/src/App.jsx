import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import LiveCamera from "./components/LiveCamera";
import "./index.css";

export default function App() {
  const [mode, setMode] = useState("image");

  return (
    <div className="p-6 text-center font-sans center">
      <h1 className="text-3xl font-bold mb-6">YOLOv5 Object Detection</h1>

      <div className="mb-6">
        <button
          onClick={() => setMode("image")}
          style={{
            margin: "0.5rem",
            padding: "0.7rem 1.5rem",
            background: mode === "image" ? "#2563eb" : "#60a5fa",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Upload Image
        </button>
        <button
          onClick={() => setMode("camera")}
          style={{
            margin: "0.5rem",
            padding: "0.7rem 1.5rem",
            background: mode === "camera" ? "#16a34a" : "#4ade80",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Live Camera
        </button>
      </div>

      {mode === "image" ? <ImageUpload /> : <LiveCamera />}
    </div>
  );
}
