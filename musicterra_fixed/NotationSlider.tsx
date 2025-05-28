import React from "react";

export default function NotationSlider({ note, setNote }: { note: number, setNote: (val: number) => void }) {
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <input
        type="range"
        min={1}
        max={10}
        value={note}
        onChange={(e) => setNote(parseInt(e.target.value))}
      />
    </div>
  );
}
