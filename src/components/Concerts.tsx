import React from "react";
const Concerts: React.FC<{ language: "fr" | "en" }> = ({ language }) => (
  <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 12, background: "#fff" }}>
    {language === "fr" ? "Concerts — bientôt disponible" : "Concerts — coming soon"}
  </div>
);
export default Concerts;
