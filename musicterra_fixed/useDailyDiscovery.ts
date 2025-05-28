import { useEffect, useState } from 'react';
import { matrix } from '../data/matrix';

const DECADES = ["1970s", "1990s", "2010s"];

export const useDailyDiscovery = () => {
  const [dailyCountry, setDailyCountry] = useState<string | null>(null);
  const [dailyDecade, setDailyDecade] = useState<string | null>(null);
  const [discovery, setDiscovery] = useState<{
    genre: string;
    playlist: string;
    similarCountries: string[];
  } | null>(null);

  useEffect(() => {
    const today = new Date().toDateString();
    const saved = localStorage.getItem('dailyDiscovery');

    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.date === today) {
        setDailyCountry(parsed.country);
        setDailyDecade(parsed.decade);
        setDiscovery(parsed.discovery);
        return;
      }
    }

    const countries = Object.keys(matrix);
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const randomDecade = DECADES[Math.floor(Math.random() * DECADES.length)];

    const entry = matrix[randomCountry]?.[randomDecade];
    if (entry) {
      setDailyCountry(randomCountry);
      setDailyDecade(randomDecade);
      setDiscovery(entry);

      localStorage.setItem(
        'dailyDiscovery',
        JSON.stringify({
          date: today,
          country: randomCountry,
          decade: randomDecade,
          discovery: entry
        })
      );
    }
  }, []);

  return { dailyCountry, dailyDecade, discovery };
};
