import React, { Component } from "react";
import Hooks from "../hooksCom/index.jsx";

export default class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const plus = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const minus = () => {
      this.setState({ count: this.state.count - 1 });
    };
    return (
      <div>
        <h1>Class:</h1>
        <h1>Count:{this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <hr />
        <Hooks count={this.state.count}/>
      </div>
    );
  }
}
