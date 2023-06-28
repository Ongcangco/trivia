import React from "react";

export default function Questions({handleAnswer, data:{question, correct_answer, incorrect_answers, answer} }) {
    return (
       <>
        <div className='question'>
          <h1>{question}</h1>
        </div>
        <div className='main-button' onClick={() => handleAnswer(answer)}>
        
          <button className='choice-button'>{correct_answer}</button>
          <button className='choice-button'>{incorrect_answers[0]}</button>
          <button className='choice-button'>{incorrect_answers[1]}</button>
          <button className='choice-button'>{incorrect_answers[2]}</button>
          
          
        </div>
      </>
      
        
    )
}

