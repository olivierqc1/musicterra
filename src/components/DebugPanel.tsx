import React from "react";
import { supabase } from "../lib/supabase";

const box: React.CSSProperties = {
  position: "fixed",
  left: 8,
  bottom: 8,
  zIndex: 9999,
  background: "rgba(0,0,0,0.65)",
  color: "#fff",
  padding: 10,
  borderRadius: 10,
  fontSize: 12,
  border: "1px solid rgba(255,255,255,0.3)"
};

export default function DebugPanel() {
  const [sessionStr, setSessionStr] = React.useState("…");

  async function check() {
    const s = await supabase.auth.getSession();
    setSessionStr(JSON.stringify(s.data.session, null, 2) || "null");
  }

  React.useEffect(() => { check(); }, []);

  return (
    <div style={box}>
      <div><b>origin</b>: {window.location.origin}</div>
      <div><b>host</b>: {window.location.host}</div>
      <div><b>is vercel?</b>: {/vercel\.app$/.test(window.location.host) ? "YES" : "NO"}</div>
      <div><b>session</b>: <button onClick={check}>refresh</button></div>
      <pre style={{maxHeight:180,overflow:"auto",margin:0}}>{sessionStr}</pre>
    </div>
  );
}
