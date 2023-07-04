import Questions from "../Questions/Questions";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import * as usersAPI from '../../utilities/users-api';




export default function HomePage({
  category,
  questionCategory,
  handleCategoryChange,
  handleQuestions,
  currentIndex,
  questions,
  score,
  handleAnswer,
  user 
}) {
const navigate = useNavigate();



useEffect (function() {
  console.log(currentIndex, questions.length, user.highScore, score)
  if (currentIndex === questions.length && user.highScore < score ) {
    console.log('if fire')
    async function saveScore() {
        const scoreObject = {score:score}
        const updatedUser = await usersAPI.saveScore(scoreObject)
        
    }
    saveScore()
  }
}, [currentIndex])


return (
  <>
    <h2>Select Category:</h2>
      <select value={questionCategory} onChange={handleCategoryChange}>
        <option>All</option>
        {category &&
          category.map((q) => (
            <option value={q.id} key={q.id}>
              {q.name}
            </option>
          ))}
      </select>
      <button onClick={handleQuestions}>Start Quiz</button>
      {questions.length > 0 ? (
     <div className="container">
     {currentIndex >= questions.length ? (
       <>
         <h1>You Scored {score}</h1>
         <button onClick={() => navigate('/scores')}>
           See My Scores
         </button>
       </>
     ) : (
       <Questions
         handleAnswer={handleAnswer}
         question={questions[currentIndex]}
       />
     )}
    </div>
 ) : (
   "Loading..."
 )}
</>
);
}
