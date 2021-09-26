import React, { Component } from "react";

export default class ClassCounterOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ""
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }

  incrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  render() {
    const { count, name } = this.state;
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            this.setState({ name: e.targe.value });
          }}
        />
        <button onClick={this.incrementCount}>count {count}</button>
      </div>
    );
  }
}
