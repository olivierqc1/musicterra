import React, { useState } from "react";
import NotationSlider from "./NotationSlider";

const styles = ["Jazz", "Electro", "Hip-Hop", "Reggae", "Rock"];
const countries = ["Brésil", "Japon", "France", "Sénégal", "Canada"];

export default function App() {
  const [suggestion, setSuggestion] = useState("");
  const [note, setNote] = useState(5);

  const handleSpin = () => {
    const genre = styles[Math.floor(Math.random() * styles.length)];
    const country = countries[Math.floor(Math.random() * countries.length)];
    setSuggestion(`${genre} - ${country}`);
  };

  return (
    <div style={{ paddingTop: "3rem" }}>
      <h1>🎧 Musicterra</h1>
      <p>Découvre ta vibe musicale du jour</p>
      <button onClick={handleSpin}>🎡 Lancer la roue</button>

      {suggestion && (
        <div style={{ marginTop: "2rem" }}>
          <h2>{suggestion}</h2>
          <NotationSlider note={note} setNote={setNote} />
          <p>Ta note : {note}/10</p>
        </div>
      )}
    </div>
  );
}
