import React, { Component } from "react";

export default class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <div className="w-50 mx-auto border border-secondary rounded-4 d-flex flex-column"></div>
        <h1 className="text-center text-primary bg-dark p-2">
          Counter in class Component
        </h1>
        <h1 className="text-center">Counter:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrease
        </button>
      </>
    );
  }
}
