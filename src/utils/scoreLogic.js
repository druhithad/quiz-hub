export function calculateScore(
  userAnswer,
  correctAnswer
) {
  return userAnswer === correctAnswer ? 10 : 0;
}