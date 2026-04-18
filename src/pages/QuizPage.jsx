import { useState } from "react";
import dummyQuestions from "../data/dummyQuestions";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import ScoreCard from "../components/ScoreCard";
import { useNavigate } from "react-router-dom";
import { db } from "../services/firebase";
import { ref, set } from "firebase/database";

function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false); // ✅ prevent multiple clicks

  const navigate = useNavigate();

  const currentQuestion = dummyQuestions[currentIndex];

  const handleAnswer = (answer) => {
    if (answered) return; // ✅ stop multiple clicks
    setAnswered(true);

    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 10);
    }

    setTimeout(() => {
      if (currentIndex < dummyQuestions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setAnswered(false); // reset for next question
      } else {
        navigate("/result", { state: { score } });
      }
    }, 500);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Timer duration={30} />
      <ScoreCard score={score} />
      <QuestionCard questionData={currentQuestion} onSelect={handleAnswer} />
    </div>
  );
}

export default QuizPage;