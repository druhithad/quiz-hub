import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const snapshot = await getDocs(collection(db, "scores"));
      const data = snapshot.docs.map(doc => doc.data());
      setScores(data);
    };
    fetchScores();
  }, []);

  return (
    <div>
      <h2>Leaderboard 🏆</h2>
      {scores.map((s, i) => (
        <p key={i}>{s.name} - {s.score}</p>
      ))}
    </div>
  );
}

export default Leaderboard;