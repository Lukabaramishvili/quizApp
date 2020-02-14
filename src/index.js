import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import QuizComponent from './QuizComponent';
import Summary from './Summary';
import './styles.css';

// import { quizzes } from './quizzes';

// console.log('Here are the quizzes:', quizzes);

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quiz" component={QuizComponent} />
        </Switch>
      </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
