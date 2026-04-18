function QuestionCard({ questionData, onSelect }) {
  if (!questionData) return <h3>Loading...</h3>;

  return (
    <div className="container">
      <h2>{questionData.question}</h2>

      {questionData.options.map((option, index) => (
        <button key={index} onClick={() => onSelect(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuestionCard;