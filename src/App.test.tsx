import React from "react";
import { genres } from "./data/genres";
import { countries } from "./data/countries";

const App: React.FC = () => {
  console.log("🔥 Type de genres:", typeof genres);
  console.log("🔥 Is genres array?", Array.isArray(genres));
  console.log("🔥 Genres length:", genres?.length);
  
  console.log("🌍 Type de countries:", typeof countries);
  console.log("🌍 Is countries array?", Array.isArray(countries));
  console.log("🌍 Countries length:", countries?.length);

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>🎵 Musicterra - Test de diagnostic</h1>
      
      <div style={{ background: '#f0f0f0', padding: 20, marginTop: 20, borderRadius: 8 }}>
        <h3>📊 Résultats :</h3>
        <p><strong>Genres :</strong> {typeof genres} - {Array.isArray(genres) ? `✅ Array (${genres.length} items)` : '❌ PAS un tableau!'}</p>
        <p><strong>Countries :</strong> {typeof countries} - {Array.isArray(countries) ? `✅ Array (${countries.length} items)` : '❌ PAS un tableau!'}</p>
      </div>

      {Array.isArray(genres) && (
        <div style={{ marginTop: 20 }}>
          <h3>Premier genre : {genres[0]?.name}</h3>
        </div>
      )}
    </div>
  );
};

export default App;
