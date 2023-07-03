import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar/NavBar";

export default function TriviaPage() {
  const { category } = useParams();
  const [questionCategory, setQuestionCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => setCategoryList(data.trivia_categories));
  }, []);

  const handleCategoryChange = (e) => {
    setQuestionCategory(e.target.value);
  };

  const handleQuestions = () => {
    if (questionCategory !== "") {
      fetch(
        `https://opentdb.com/api.php?amount=10&category=${questionCategory}&type=multiple`
      )
        .then((res) => res.json())
        .then((data) => setQuestions(data.results))
        .catch((error) => console.log(error));
    } else {
      alert("Please select a category");
    }
  };

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);

    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <NavBar />
      <HomePage
        category={categoryList}
        questionCategory={questionCategory}
        handleCategoryChange={handleCategoryChange}
        handleQuestions={handleQuestions}
        currentIndex={currentIndex}
        questions={questions}
        score={score}
        handleAnswer={handleAnswer}
      />
    </div>
  );
}























