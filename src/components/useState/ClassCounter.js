import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}>count {count}</button>
      </div>
    );
  }
}
