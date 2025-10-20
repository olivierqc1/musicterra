// ─────────────── services/ticketmaster.ts ───────────────
export async function searchConcertsByArtist(artist: string) {
  const API_KEY = import.meta.env.VITE_TICKETMASTER_API_KEY;

  // 1️⃣ Requête principale (musique, tous pays)
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&keyword=${encodeURIComponent(
    artist
  )}&classificationName=music&size=20`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    // 2️⃣ Si aucun concert trouvé, on tente sans le filtre "music"
    if (!data._embedded?.events) {
      const fallbackUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&keyword=${encodeURIComponent(
        artist
      )}&size=20`;

      const fallbackRes = await fetch(fallbackUrl);
      const fallbackData = await fallbackRes.json();
      return fallbackData._embedded?.events || [];
    }

    return data._embedded.events;
  } catch (err) {
    console.error("Erreur API Ticketmaster :", err);
    return [];
  }
}
