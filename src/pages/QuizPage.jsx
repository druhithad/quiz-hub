import { useState } from "react";
import dummyQuestions from "../data/dummyQuestions";
import QuestionCard from "../components/QuestionCard";
import ScoreCard from "../components/ScoreCard";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom";
import { db, auth } from "./firebase";
import { ref, set } from "firebase/database";

function QuizPage() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const navigate = useNavigate();
  const q = dummyQuestions[index];

  const handleAnswer = (ans) => {
    if (answered) return;

    setAnswered(true);

    let newScore = score;

    if (ans === q.correctAnswer) {
      newScore = score + 10;
      setScore(newScore);
    }

    setTimeout(() => {
      if (index < dummyQuestions.length - 1) {
        setIndex(prev => prev + 1);
        setAnswered(false);
      } else {
        const user = auth.currentUser;

        if (user) {
          set(ref(db, "scores/" + user.uid), {
            email: user.email,
            score: newScore
          });
        }

        navigate("/result", { state: { score: newScore } });
      }
    }, 500);
  };

  return (
    <div className="container">
      <Timer duration={30} />
      <ScoreCard score={score} />
      <QuestionCard questionData={q} onSelect={handleAnswer} />
    </div>
  );
}

export default QuizPage;