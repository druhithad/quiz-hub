import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { categories } from "../data/questions";

const icons = { Science: "🔬", History: "📜", Technology: "💻", Mathematics: "📐" };
const colors = { Science: "#4CAF50", History: "#FF9800", Technology: "#2196F3", Mathematics: "#9C27B0" };

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="navbar">
        <h1>🧠 QuizHub</h1>
        <div className="nav-right">
          <span>👋 {user?.displayName}</span>
          <button onClick={() => navigate("/leaderboard")} className="btn-outline">🏆 Leaderboard</button>
          <button onClick={() => signOut(auth)} className="btn-logout">Logout</button>
        </div>
      </header>

      <div className="home-content">
        <h2>Choose a Category</h2>
        <p>5 questions · 15 seconds each · Test your knowledge!</p>
        <div className="category-grid">
          {Object.keys(categories).map(cat => (
            <div key={cat} className="category-card" style={{ borderTop: `4px solid ${colors[cat]}` }}
              onClick={() => navigate(`/quiz/${cat}`)}>
              <span className="cat-icon">{icons[cat]}</span>
              <h3>{cat}</h3>
              <p>{categories[cat].length} Questions</p>
              <button style={{ background: colors[cat] }}>Start Quiz →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}