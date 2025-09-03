import React, { useState } from "react";
import { uploadImage } from "../api";

export default function ImageUpload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first.");
    setLoading(true);
    try {
      const res = await uploadImage(file);
      setResult(res);
    } catch (err) {
      console.error(err);
      alert("Error uploading image.");
    }
    setLoading(false);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button
        onClick={handleUpload}
        style={{
          marginLeft: "1rem",
          padding: "0.5rem 1rem",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Detect
      </button>

      {loading && <p>Processing...</p>}

      {result && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Detections:</h3>
          <ul>
            {result.detections.map((d, i) => (
              <li key={i}>
                {d.class} ({Math.round(d.confidence * 100)}%)
              </li>
            ))}
          </ul>
          <img
            src={`http://127.0.0.1:8000/${result.result_image}`}
            alt="Result"
            style={{ marginTop: "1rem", maxWidth: "600px" }}
          />
        </div>
      )}
    </div>
  );
}
