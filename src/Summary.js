import React, { Component } from 'react';
import {getMessage} from './messages'

const Summary = ({score, moveToNextQuiz, beginNextQuiz, quizQuestions}) => {
  const handleClick = event => {
    moveToNextQuiz()
    beginNextQuiz()
  }

  return(<div className="app">
    <h1>Summary Page</h1>
    <div className="summary-container">
      You Scored {score} / {quizQuestions.length} correct answers!
    </div>
    <p>{getMessage()}</p>
    <div>
      <button className="next-button" onClick={handleClick}>
        Next Quiz
      </button>
    </div>
  </div>
)
};

export default Summary;
