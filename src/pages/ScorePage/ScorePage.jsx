import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as usersAPI from '../../utilities/users-api'

export default function ScorePage({ score }) {
  const [scores, setScores] = useState([]);
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    // Navigate to the home page to start the quiz
    navigate('/');
  };

  useEffect (function() {
    async function getScores() {
      const allScores = await usersAPI.getAllScores()
      console.log(allScores)
      setScores(allScores)  
      console.log(scores) 

    }
    getScores()
  }, [])

  // const handleSeeScores = () => {
  //   // Navigate to the scores page to view all scores
  //   navigate('/scores');
  // };

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
          {scores.map((score) => (
            <tr><td>Name</td><td>{score}</td></tr>
          ))}
        </tbody>
      </table>
      <div>
    </div>
      
      <button onClick={handleStartQuiz}>Start New Quiz</button>
      {/* <button onClick={handleSeeScores}>See All Scores</button> */}
    </div>
  );
}
