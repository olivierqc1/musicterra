// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Styles globaux
import "./index.css";

// Auth
import { AuthProvider } from "./context/AuthContext";

// Debug
import DebugPanel from "./components/DebugPanel";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
      {import.meta.env.DEV && <DebugPanel />}
    </AuthProvider>
  </React.StrictMode>
);
