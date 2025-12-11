import { BackendStatus } from "./components/BackendStatus";

export function App() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>FastAPI + React MVP</h1>
      <BackendStatus />
    </main>
  );
}
