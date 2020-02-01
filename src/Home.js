import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <div id="home">
        <h1>Welcome to Quiz Assignment</h1>
        <Link className="start-button" to="/quiz">Start</Link>
      </div>
    );
  }

}

export default Home;
