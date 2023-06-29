import Questions from "../Questions/Questions";

export default function HomePage({
  category,
  questionCategory,
  handleCategoryChange,
  handleQuestions,
  
}) {
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
     
    </>
  );
}

// import { useState } from 'react';
// import { redirect } from 'react-router-dom';


// export default function HomePage() {
//     const [trivia, setTrivia] = useState(false);
//     const [category, setCategory] = useState("");
//     const [difficulty, setDifficulty] = useState("");
//     const [error, setError] = useState(false);
    

//     const handleSubmit = () => {
//     if (!category || !difficulty) {
//         setError(true);
//     return;
//     } else {
//         setError(false);
        
//     };
// }
 
//     return(
//         <div className="settings">
//             <span>Trivia Settings</span>
//             <div className="select">
//                 <span>Difficulty</span>
//                     <select>
//                         <option>Easy</option>
//                         <option>Medium</option>
//                         <option>Hard</option>
//                         <option>Show-Off Status</option>
//                     </select>
//                     <br/>
//                 <span>Category</span> 
//                     <select>
//                         <option>Board Games</option>
//                         <option>Geography</option>
//                         <option>Computers</option>
//                         <option>Food</option>
//                     </select> 
//             </div>
//                 <button className="begin-button" onClick={() => {setTrivia(true)}}>Begin</button>
//         </div>
//     )
// }