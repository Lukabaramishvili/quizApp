import React, { Component } from 'react';

const Summary = ({score, moveToNextQuiz, nextQuiz, quizQuestions}) => {
  console.log(score);
  const handleClick = (event) => {
    moveToNextQuiz()
    nextQuiz()
  }

  return(<div className="app">
    <h1>Summary Page</h1>
    <div className="summary-container">
      You Scored {score} / {quizQuestions.length} correct answers!
    </div>
    <div>
      <button className="next-button" onClick={handleClick}>
        Next Quiz
      </button>
    </div>
  </div>
)
};

export default Summary;
