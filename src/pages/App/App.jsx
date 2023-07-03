import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import ScorePage from '../ScorePage/ScorePage';
import HomePage from '../HomePage/HomePage';

import TriviaPage from '../TriviaPage/TriviaPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [category, setCategory] = useState(null);
  const [questionCategory, setQuestionCategory] = useState("");
  const [questionAmount, setQuestionAmount] = useState("10");
  const [questions, setQuestions] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);


  useEffect(() => {
    const API_URL = `https://opentdb.com/api_category.php`;
    fetch(API_URL)
    .then((res) => res.json())
    .then((response) => {
      setCategory(response.trivia_categories);
    });
}, []);

const handleCategoryChange = (event) => {
  setQuestionCategory(event.target.value);
};

const handleQuestions = async () => {
  let API_URL = `https://opentdb.com/api.php?amount=${questionAmount}`;

  if (questionCategory.length) {
    API_URL = API_URL.concat(`&category=${questionCategory}`);
  }

  await fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      const updatedQuestions = res.results.map((question) => {
        const randomizedAnswers = [
          ...question.incorrect_answers,
          question.correct_answer
        ].sort(() => Math.random() - 0.5);
        return {
          ...question,
          answers: randomizedAnswers
        };
      });
      setQuestions(updatedQuestions);
      setCurrentIndex(0);
      setScore(0);
    });
};

const handleAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    setScore((prevScore) => prevScore + 1);
  }
  setCurrentIndex((prevIndex) => prevIndex + 1);
};

return (
  <main className="App">
    {user ? (
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                category={category}
                questionCategory={questionCategory}
                handleCategoryChange={handleCategoryChange}
                handleQuestions={handleQuestions}
                questions={questions}
                currentIndex={currentIndex}
                score={score}
                handleAnswer={handleAnswer}
              />
            }
          />
          <Route path="/Trivia" element={<TriviaPage />} />
          <Route path="/scores" element={<ScorePage />} />
        </Routes>
      </>
    ) : (
      <AuthPage setUser={setUser} />
    )}
  </main>
);
}


