import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';

console.log("🔥 main.tsx commence à charger");

import App from "./App";
console.log("✅ App importé");

import "./index.css";
console.log("✅ CSS importé");

import { AuthProvider } from "./context/AuthContext";
console.log("✅ AuthProvider importé");

import DebugPanel from "./components/DebugPanel";
console.log("✅ DebugPanel importé");

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ ERREUR: Élément #root introuvable dans le DOM!");
} else {
  console.log("✅ Élément #root trouvé");
  
  try {
    console.log("🚀 Tentative de render React...");
    
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <HelmetProvider>
          <AuthProvider>
            <App />
            {import.meta.env.DEV && <DebugPanel />}
          </AuthProvider>
        </HelmetProvider>
      </React.StrictMode>
    );
    
    console.log("✅ React rendu avec succès!");
  } catch (error) {
    console.error("❌ ERREUR lors du render:", error);
  }
}