// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";

// TEST - Voir si le JavaScript charge
console.log("🔥 main.tsx commence à charger");

import App from "./App";

console.log("✅ App importé");

// Styles globaux
import "./index.css";

console.log("✅ CSS importé");

// Auth
import { AuthProvider } from "./context/AuthContext";

console.log("✅ AuthProvider importé");

// Debug
import DebugPanel from "./components/DebugPanel";

console.log("✅ DebugPanel importé");

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ ERREUR: Élément #root introuvable dans le DOM!");
  alert("ERREUR: #root introuvable!");
} else {
  console.log("✅ Élément #root trouvé");
  
  try {
    console.log("🚀 Tentative de render React...");
    
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <AuthProvider>
          <App />
          {import.meta.env.DEV && <DebugPanel />}
        </AuthProvider>
      </React.StrictMode>
    );
    
    console.log("✅ React rendu avec succès!");
  } catch (error) {
    console.error("❌ ERREUR lors du render:", error);
    alert("ERREUR: " + error);
  }
}
