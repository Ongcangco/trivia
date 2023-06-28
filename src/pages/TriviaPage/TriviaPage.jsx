import { useEffect, useState } from 'react';
import './TriviaPage.css';
import Questions from '../Questions/Questions';
import Axios from 'axios';

const API_URL = "https://opentdb.com/api.php?amount=10&category=16&difficulty=easy&type=multiple";

export default function TriviaPage() {
  const [question, setQuestion] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    Axios.get(API_URL)
      .then(res => res.data)
      .then(data => {
        setQuestion(data.results)
      })
  }, []);

  return ( question.length > 0 ? (
    <div className='container'>
      <Questions data={question[currentIndex]} />
    </div>
    
  ) : 'loading..'
  
  );
}








