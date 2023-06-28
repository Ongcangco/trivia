import React from "react";

function Questions({data:{trivia, correct_answer, incorrect_answer} }) {
    return (
        <div className='Container'>
        <div className='question'>
          <h1>{trivia}</h1>
        </div>
        <div className='main-button'>
          <button className='choice-button'>{correct_answer}</button>
          <button className='choice-button'>{incorrect_answer[0]}</button>
          <button className='choice-button'>{incorrect_answer[1]}</button>
          <button className='choice-button'>{incorrect_answer[2]}</button>
          
          
        </div>
      </div>
        
    )
}

export default Questions