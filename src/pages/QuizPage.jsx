import { useState } from "react";
import dummyQuestions from "../data/dummyQuestions";
import QuestionCard from "../components/QuestionCard";
import Timer from "../components/Timer";
import ScoreCard from "../components/ScoreCard";

function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = dummyQuestions[currentIndex];

  const handleAnswer = (answer) => {
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 10);
    }

    if (currentIndex < dummyQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Timer duration={30} />
      <ScoreCard score={score} />

      <QuestionCard
        questionData={currentQuestion}
        onSelect={handleAnswer}
      />
    </div>
  );
}

export default QuizPage;