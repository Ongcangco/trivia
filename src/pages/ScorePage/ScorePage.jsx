import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ScorePage({ user }) {
  const [scores, setScores] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch('https://api.example.com/scores');
        const data = await response.json();
        setScores(data.scores);
      } catch (error) {
        console.log(error);
      }
    };

    fetchScores();
  }, []);

  const handleStartQuiz = () => {
    // Navigate to the home page to start the quiz
    navigate('/');
  };

  const handleSeeScores = () => {
    // Navigate to the scores page to view all scores
    navigate('/scores');
  };

  return (
    <div>
      <h1>ScoreBoard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.name}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {user && (
        <div>
          <h2>Your Score: {user.score}</h2>
        </div>
      )}
      <button onClick={handleStartQuiz}>Start Quiz</button>
      <button onClick={handleSeeScores}>See All Scores</button>
    </div>
  );
}
