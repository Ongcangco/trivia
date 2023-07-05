import Questions from "../Questions/Questions";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as usersAPI from '../../utilities/users-api';
import './HomePage.css';


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
  if (currentIndex === questions.length && user.highScore < score ) {
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
    <div class="home-container">
      <select class="sdropdown" value={questionCategory} onChange={handleCategoryChange}>
        <option>All</option>

          {category && category.map((q) => (
            <option value={q.id} key={q.id}>
              {q.name}
            </option>
          ))}
      </select>   
      <button className="sbutton" onClick={handleQuestions}>Start Quiz</button>

    </div>
    
    {questions.length > 0 ? (
     <div className="scoreContainer">
     {currentIndex >= questions.length ? (
       <>
         <h1>You Scored {score}</h1>
         <button className="scoreButton" onClick={() => navigate('/scores')}>
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
    "."
    )}
  </>
);
}