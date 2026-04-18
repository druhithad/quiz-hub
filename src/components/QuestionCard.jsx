function QuestionCard({ questionData, onSelect }) {
  return (
    <div>
      <h2>{questionData.question}</h2>

      {questionData.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuestionCard;