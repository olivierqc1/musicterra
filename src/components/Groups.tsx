import React from "react";
const Groups: React.FC<{ language: "fr" | "en" }> = ({ language }) => (
  <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 12, background: "#fff" }}>
    {language === "fr" ? "Groupes — bientôt disponible" : "Groups — coming soon"}
  </div>
);
export default Groups;
