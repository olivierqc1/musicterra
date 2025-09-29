import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

/**
 * Affiche un formulaire d'email (magic link) si l'utilisateur n'est pas connecté.
 * Quand la session existe, rend simplement {children}.
 */
const AuthGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { session, signInWithMagicLink, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [message, setMessage
