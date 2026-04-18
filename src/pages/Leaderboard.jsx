import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { ref, get } from "firebase/database";

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const snapshot = await get(ref(db, "scores"));
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val());
        setScores(data);
      }
    };
    fetchScores();
  }, []);

  return (
    <div>
      <h2>Leaderboard 🏆</h2>
      {scores.map((s, i) => (
        <p key={i}>{s.score}</p>
      ))}
    </div>
  );
}

export default Leaderboard;