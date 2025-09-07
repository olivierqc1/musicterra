const KEY = 'musicterra_analytics_events_v1';

export type UXEvent =
  | { type: 'spin'; pool: 'all' | 'genres' | 'countries' | 'cities'; picked: string }
  | { type: 'open_spotify'; item: string }
  | { type: 'rate'; item: string; value: number }
  | { type: 'change_language'; to: 'fr' | 'en' }
  | { type: 'change_pool'; to: 'all' | 'genres' | 'countries' | 'cities' }
  | { type: 'change_tab'; to: 'discover' | 'profile' | 'groups' }
  | { type: 'profile_update'; fields: string[] }
  | { type: 'group_create'; name: string }
  | { type: 'message_send'; groupId: string };

function load(): any[] {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
}
function save(arr: any[]) { localStorage.setItem(KEY, JSON.stringify(arr)); }

export function logEvent(ev: UXEvent) {
  const arr = load();
  arr.push({ ...ev, ts: Date.now() });
  save(arr);
}

export function getEvents() { return load(); }
export function clearEvents() { save([]); }
