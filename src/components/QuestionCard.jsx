function QuestionCard({ questionData, onSelect }) {
  if (!questionData) return <h3>Loading...</h3>;

  return (
    <div className="card">
      <h2>{questionData.question}</h2>

      {questionData.options.map((opt, i) => (
        <button key={i} onClick={() => onSelect(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}

export default QuestionCard;