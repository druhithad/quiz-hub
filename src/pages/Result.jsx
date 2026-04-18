import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  const score = location.state?.score || 0;

  return (
    <div>
      <h1>Quiz Completed 🎉</h1>
      <h2>Your Final Score: {score}</h2>
    </div>
  );
  set(ref(db, "scores/user1"), {
  score: score
});
}

export default Result;