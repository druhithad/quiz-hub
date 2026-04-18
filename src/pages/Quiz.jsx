import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../data/questions";

const TIME_PER_QUESTION = 15;

export default function Quiz() {
  const { category } = useParams();
  const navigate = useNavigate();
  const questions = categories[category] || [];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [answers, setAnswers] = useState([]);

  const goNext = useCallback((ans) => {
    const correct = questions[current].answer;
    const isCorrect = ans === correct;
    setAnswers(prev => [...prev, { q: questions[current].q, selected: ans, correct, isCorrect }]);
    if (isCorrect) setScore(s => s + 1);

    if (current + 1 < questions.length) {
      setCurrent(c => c + 1);
      setSelected(null);
      setTimeLeft(TIME_PER_QUESTION);
    } else {
      navigate("/result", {
        state: { score: isCorrect ? score + 1 : score, total: questions.length, category, answers: [...answers, { q: questions[current].q, selected: ans, correct, isCorrect }] }
      });
    }
  }, [current, questions, score, answers, category, navigate]);

  useEffect(() => {
    if (timeLeft === 0) { goNext(null); return; }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, goNext]);

  const q = questions[current];
  const progress = ((current) / questions.length) * 100;
  const timerColor = timeLeft <= 5 ? "#f44336" : timeLeft <= 10 ? "#FF9800" : "#4CAF50";

  return (
    <div className="quiz-page">
      <div className="quiz-card">
        <div className="quiz-header">
          <span className="category-tag">{category}</span>
          <div className="timer" style={{ color: timerColor, borderColor: timerColor }}>
            ⏱ {timeLeft}s
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="question-count">Question {current + 1} of {questions.length}</p>

        <h2 className="question-text">{q.q}</h2>

        <div className="options-grid">
          {q.options.map(opt => (
            <button key={opt}
              className={`option-btn ${selected === opt ? (opt === q.answer ? "correct" : "wrong") : ""}`}
              onClick={() => { if (!selected) { setSelected(opt); setTimeout(() => goNext(opt), 600); } }}>
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}