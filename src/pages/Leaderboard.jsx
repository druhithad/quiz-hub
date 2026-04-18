import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "users"), orderBy("totalScore", "desc"), limit(10));
      const snap = await getDocs(q);
      setPlayers(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    fetchData();
  }, []);

  const medals = ["🥇", "🥈", "🥉"];

  return (
    <div className="leaderboard-page">
      <div className="lb-card">
        <button className="back-btn" onClick={() => navigate("/")}>← Back</button>
        <h1>🏆 Leaderboard</h1>
        <p>Top 10 Quiz Champions</p>
        <div className="lb-list">
          {players.map((p, i) => (
            <div key={p.id} className={`lb-row ${i < 3 ? "top-three" : ""}`}>
              <span className="rank">{medals[i] || `#${i + 1}`}</span>
              <div className="player-info">
                <span className="player-name">{p.name}</span>
                <span className="player-stats">{p.quizzesPlayed} quizzes played</span>
              </div>
              <span className="player-score">{p.totalScore} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}