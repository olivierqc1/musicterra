// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Styles globaux
import "./index.css";

// Auth
import { AuthProvider } from "./context/AuthContext";
import AuthGate from "./components/AuthGate";

// Debug
import DebugPanel from "./components/DebugPanel";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <AuthGate>
        <App />
        {/* Debug visible uniquement en dev/test */}
        {true && <DebugPanel />}
      </AuthGate>
    </AuthProvider>
  </React.StrictMode>
);


