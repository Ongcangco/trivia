import { useEffect, useState } from 'react';
import './TriviaPage.css';
import Questions from '../Questions/Questions';
import Axios from 'axios';

const API_URL = "https://opentdb.com/api.php?amount=10&category=16&difficulty=easy&type=multiple";

export default function TriviaPage() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);


  useEffect(() => {
    Axios.get(API_URL)
      .then(res => res.data)
      .then(data => {
        const questions = data.results.map((question) => ({
          ...question,
          answers:[question.correct_answer, ...question.incorrect_answers].sort(() => Math.random())
        }))

        setQuestions(questions)
      });
  }, [])

  const handleAnswer = (answer) => {
    if(answer === questions[currentIndex].correct_answer) {
      setScore(score+1);
    }
    setCurrentIndex(currentIndex + 1);
  }



  return ( questions.length > 0 ? (
    <div className='container'>
      <Questions handleAnswer={handleAnswer}
      data={questions[currentIndex]} />
    </div>

  ) : 'loading..'
  
  );
}







