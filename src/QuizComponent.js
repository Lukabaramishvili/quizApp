import React, { Component } from 'react';
import MultipleChoiceQuiz from './MultipleChoiceQuiz';
import RedoQuestions from './RedoQuestions';
import { quizzes } from './quizzes';


class QuizComponent extends Component {
  state = {
    quizIndex: 0,
    incorrect: [],
    redo: false
  }

  moveToNextQuiz = () => {
    let { quizIndex } = this.state
    const newIndex = (quizIndex === quizzes.length - 1) ? 0 : quizIndex + 1
    this.setState({
      quizIndex: newIndex
    })
    this.props.history.push("/quiz")
  }

  handleIncorectQuestions = (incorrectQuestionObj) => {
      // console.log(incorrectQuestionObj)
      this.setState({
        incorrect: [...this.state.incorrect, incorrectQuestionObj]
      }, () => console.log(this.state.incorrect))


  }

  handleCheckForSummary = () => {
    // console.log('I am reached')
    this.setState({
      redo: !this.state.redo
    }, () => console.log("Helloe?!?!", this.state))
  }

  render() {
    console.log(this.state)
    let { quizIndex, incorrect } = this.state
    return (
      <div>
        {
          this.state.redo ?
          <RedoQuestions handleCheckForSummary={this.handleCheckForSummary} incorrect={incorrect} handleIncorectQuestions={this.handleIncorectQuestions} quizQuestions={incorrect} moveToNextQuiz={this.moveToNextQuiz} quizTitle ={incorrect[quizIndex].title} handleCheckForSummary={this.handleCheckForSummary}/>
          :
          <MultipleChoiceQuiz handleCheckForSummary={this.handleCheckForSummary} incorrect={incorrect} handleIncorectQuestions={this.handleIncorectQuestions} quizQuestions={quizzes[quizIndex].questions} moveToNextQuiz={this.moveToNextQuiz} quizTitle ={quizzes[quizIndex].title}
            redo={this.state.redo}/>
        }
      </div>
    );
  }

}

export default QuizComponent;
