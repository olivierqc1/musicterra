import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Styles globaux (si tu as un index.css)
import "./index.css";

// Auth
import { AuthProvider } from "./context/AuthContext";
import { AuthGate } from "./components/AuthGate";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <AuthGate>
        <App />
      </AuthGate>
    </AuthProvider>
  </React.StrictMode>
);

