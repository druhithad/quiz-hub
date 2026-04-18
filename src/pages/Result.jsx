import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc, increment } from "firebase/firestore";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { score, total, category, answers } = state || {};
  const percent = Math.round((score / total) * 100);

  useEffect(() => {
    if (user) {
      updateDoc(doc(db, "users", user.uid), {
        totalScore: increment(score),
        quizzesPlayed: increment(1)
      });
    }
  }, []);

  const emoji = percent >= 80 ? "🏆" : percent >= 60 ? "👍" : "📚";

  return (
    <div className="result-page">
      <div className="result-card">
        <div className="result-emoji">{emoji}</div>
        <h2>{category} Quiz Complete!</h2>
        <div className="score-circle">
          <span>{score}/{total}</span>
          <p>{percent}%</p>
        </div>
        <p className="result-msg">
          {percent >= 80 ? "Outstanding! You're a genius!" : percent >= 60 ? "Good job! Keep it up!" : "Keep practicing, you'll improve!"}
        </p>

        <div className="answers-review">
          {answers?.map((a, i) => (
            <div key={i} className={`answer-item ${a.isCorrect ? "correct" : "wrong"}`}>
              <p><strong>Q{i+1}:</strong> {a.q}</p>
              <p>Your answer: {a.selected || "⏰ Time up"} {a.isCorrect ? "✅" : "❌"}</p>
              {!a.isCorrect && <p className="correct-ans">Correct: {a.correct}</p>}
            </div>
          ))}
        </div>

        <div className="result-actions">
          <button onClick={() => navigate("/")}>🏠 Home</button>
          <button onClick={() => navigate("/leaderboard")}>🏆 Leaderboard</button>
        </div>
      </div>
    </div>
  );
}