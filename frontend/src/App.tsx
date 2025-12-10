// frontend/src/App.tsx
import React from "react";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export function App() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    fetch(`${API_URL}/health`)
      .then((r) => r.json())
      .then((data) => setStatus(data.status ?? "unknown"))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <main style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h1>Frontend is running</h1>
      <p>Health check status: {status}</p>
    </main>
  );
}
