import React from "react";

export default function Questions({data:{question, correct_answer, incorrect_answer} }) {
    return (
       <>
        <div className=''>
          <h1>{question}</h1>
        </div>
        <div className='main-button'>
          <button className='choice-button'>{correct_answer}</button>
          <button className='choice-button'>{incorrect_answer}</button>
          <button className='choice-button'>{incorrect_answer}</button>
          <button className='choice-button'>{incorrect_answer}</button>
          
          
        </div>
      </>
      
        
    )
}

