import React, { Component } from 'react';
import ChoiceComponent from './ChoiceComponent';
import Summary from './Summary';
import { withRouter, Route } from 'react-router-dom'


// const quizQuestions = quizzes[0].questions

class MultipleChoiceQuiz extends Component {
  // quizQuestions: quizQuestions,
  state = {
    currentQuestionIndex: 0,
    score: 0,
    choices: [],
    loading: true,
    chosen: null
  }

  componentDidMount () {
    this.generateChoices();
  }

  generateChoices = () => {
    let { currentQuestionIndex } = this.state;
    let { quizQuestions } = this.props;
    const choices = this.shuffle([...quizQuestions[currentQuestionIndex].incorrectAnswers, quizQuestions[currentQuestionIndex].correctAnswer])
    this.setState({
      choices,
      chosen: null,
      loading: false
    });
  }

  increaseScore = () => {
    this.setState(prevState => ({
      score: prevState.score + 1
    }))
  }

  handleNextButtonClick = () => {
    let { currentQuestionIndex } = this.state;
    let { quizQuestions } = this.props;

    if (quizQuestions[currentQuestionIndex + 1]) {
      this.setState(prevState => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1
      }), this.generateChoices)
    } else {
      this.props.history.push('/quiz/summary')
      this.setState(prevState => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1
      }))
    }
  }

  handleOptionClick = (choice) => {
    let { currentQuestionIndex, chosen } = this.state;
    let { quizQuestions } = this.props;
    //if option was selected once, prevent it from selecting second time
    if(chosen) {return}

    this.setState({
      chosen: choice
    })

    if (choice.toLowerCase() === quizQuestions[currentQuestionIndex].correctAnswer.toLowerCase()) {
      // right: increase the
      this.increaseScore();
    }
  }

  determineColor = (choice) => {
    let { currentQuestionIndex } = this.state;
    let { quizQuestions } = this.props;
    // let style = {textDecoration: 'none'};
    let correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer

    if (this.state.chosen) {
      // no matter what,  mark correct answer as green
      if (choice === correctAnswer){
        return "green"
      } else if(choice === this.state.chosen) {
        return "red"
      }
    }
    return "white"
  }

  nextQuiz = () => {
    this.setState ({
      score: 0,
      currentQuestionIndex: 0,
      loading: true,
      chosen: null
    }, this.generateChoices)
  }

  shuffle = (array) => {

  	let currentIndex = array.length;
  	let temporaryValue, randomIndex;

  	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {
  		// Pick a remaining element...
  		randomIndex = Math.floor(Math.random() * currentIndex);
  		currentIndex -= 1;

  		// And swap it with the current element.
  		temporaryValue = array[currentIndex];
  		array[currentIndex] = array[randomIndex];
  		array[randomIndex] = temporaryValue;
  	}

  	return array;

  };

  render() {
    const { currentQuestionIndex, choices, loading, score } = this.state
    let { quizQuestions, quizTitle } = this.props;
    if (loading){
      return <div>Loading...</div>
    }
    if (currentQuestionIndex < quizQuestions.length) {
    return (
      <div className="app">
        <h1>{quizTitle}</h1>
        <div className="options-container">
          <h5>{quizQuestions[currentQuestionIndex].text}</h5>
          <ol type="A">
            {
              choices.map((choice, i) => <ChoiceComponent key={i} color={this.determineColor(choice)} choose={this.handleOptionClick} quizQuestions={quizQuestions} choice={choice} />)
            }
          </ol>
        </div>
        {
          this.state.chosen === null ? <p></p> : this.state.chosen === quizQuestions[currentQuestionIndex].correctAnswer ? <p>correct</p> : <p>incorrect</p>
        }
          <div>
            {
              this.state.chosen ? <button className="next-button" onClick={this.handleNextButtonClick}>Next</button> : null
            }
          </div>
      </div>
    )} else {
      return <Route path="/quiz/summary" render={(renderProps) => <Summary renderProps={renderProps} score={score} moveToNextQuiz={this.props.moveToNextQuiz} nextQuiz={this.nextQuiz} quizQuestions={quizQuestions}/>} />
    }
  }
}

export default withRouter(MultipleChoiceQuiz);
