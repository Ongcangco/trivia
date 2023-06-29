export default function Questions({ questions }) {
  return (
    <>
      <div className="question">
        <h2>Question here</h2>
      </div>
    </>
  );
}


// export default function Questions({handleAnswer, question }) {
//   function handleClick(evt) {
//     if(evt.target.localName === 'button') {
//       handleAnswer(evt.target.innerText, question.correct_answer)
//     }
//   }
//     return (
//        <>
//         <div className='question'>
//           <h1 dangerouslySetInnerHTML={{__html:question.question}}/>
//         </div>
//         <div className='main-button' onClick={handleClick}>
        
//           <button className='choice-button'>{question.correct_answer}</button>
//           <button className='choice-button'>{question.incorrect_answers[0]}</button>
//           <button className='choice-button'>{question.incorrect_answers[1]}</button>
//           <button className='choice-button'>{question.incorrect_answers[2]}</button>
          
          
//         </div>
//       </>
      
        
//     )
// }

