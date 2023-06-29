import { useEffect, useState } from 'react';
import './TriviaPage.css';
import Questions from '../Questions/Questions';
import Axios from 'axios';
import App from '../App/App';

const API_URL = "https://opentdb.com/api.php?amount=10&category=16&difficulty=easy&type=multiple";

export default function TriviaPage() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);


  useEffect(() => {
    Axios.get(API_URL)
      .then(res => res.data)
      .then(data => {
        const updatedQuestions = data.results.map(question => {
          const randomizedAnswers = [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5);
          return {
            ...question,
            answers: randomizedAnswers,
          };
        });

        setQuestions(updatedQuestions);
      });
  }, []);

  const handleAnswer = (userAnswer, correctAnswer ) => {
    if(userAnswer === correctAnswer) {
      setScore(score+1);
    }
    setCurrentIndex(currentIndex + 1);
  }



  return ( questions.length > 0 ? (
    <div className='container'>
      {currentIndex >= questions.length ? (
      <h1>You Scored {score} </h1>):
     (<Questions handleAnswer={handleAnswer}
      question={questions[currentIndex]} />)}
    </div>

  ) : 'loading..'
  
  );
}

// const score = {
//   score: {score},
  
// };
// console.log(score)









