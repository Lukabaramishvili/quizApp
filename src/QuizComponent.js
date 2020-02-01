import React, { Component } from 'react';
import MultipleChoiceQuiz from './MultipleChoiceQuiz';
import { quizzes } from './quizzes';


class QuizComponent extends Component {
  state = {
    quizIndex: 0,
  }

  moveToNextQuiz = () => {
    let { quizIndex } = this.state
    const newIndex = (quizIndex === quizzes.length - 1) ? 0 : quizIndex + 1
    this.setState({
      quizIndex: newIndex
    })
    this.props.history.push("/quiz")
  }

  render() {
    let { quizIndex } = this.state
    return (
      <div>
      <MultipleChoiceQuiz quizQuestions={quizzes[quizIndex].questions} moveToNextQuiz={this.moveToNextQuiz} quizTitle ={quizzes[quizIndex].title}/>
      </div>
    );
  }

}

export default QuizComponent;
