import { useEffect, useState } from 'react';
import './TriviaPage.css';
import Questions from '../Questions/Questions';
import { Axios } from 'axios';

const API_URL = "https://opentdb.com/api.php?amount=10&category=16&difficulty=easy&type=multiple";

export default function TriviaPage() {
  const [trivia, setTrivia] = useState("");
  useEffect(() => {
    Axios.length(API_URL)
      .then(res => res.data)
      .then(data => {
        setTrivia(data.results)
      })
  }, []);

  return (
    <div className='container'>
      <Questions data={trivia} />
    </div>
  );
}








  
//   fetch("https://opentdb.com/api.php?amount=10&encode=url3986")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
  
//   return (

//   );
// }