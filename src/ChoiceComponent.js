import React, { Component } from 'react';

class ChoiceComponent extends Component {


  render() {
    const strike = this.props.color === "red" ? {textDecoration: 'line-through'} : {}
    return (
      <div style={{border: `2px solid ${this.props.color}`}}>
        <li className="options-style" style={strike} onClick={(e) => this.props.choose(this.props.choice)}>
          {this.props.choice}
        </li>
      </div>
    );
  }

}

export default ChoiceComponent;
