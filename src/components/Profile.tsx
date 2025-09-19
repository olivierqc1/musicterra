import React from "react";
import { useAuth } from "../context/AuthContext";

const Profile: React.FC = () => {
  const { profile } = useAuth();
  return (
    <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 12, background: "#fff" }}>
      <h3>Profil</h3>
      <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(profile, null, 2)}</pre>
    </div>
  );
};
export default Profile;
