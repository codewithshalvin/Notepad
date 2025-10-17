import { useState, useEffect } from "react";

export default function App() {
  const [note, setNote] = useState("");

  useEffect(() => {
    const savedNote = localStorage.getItem("myNote") || "";
    setNote(savedNote);
  }, []);


  useEffect(() => {
    localStorage.setItem("myNote", note);
  }, [note]);
  
  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Simple Notepad</h1>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={15}
        style={{ width: "100%", fontSize: 16, padding: 10, borderRadius: 5, borderColor: "#ccc" }}
        placeholder="Start typing your notes here..."
      />
    </div>
  );
}
