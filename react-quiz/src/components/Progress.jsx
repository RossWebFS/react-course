export const Progress = ({
  index,
  numOfQuestions,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + +(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};
