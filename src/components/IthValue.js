import React, { Component } from 'react';

class IthValue extends Component {
  constructor() {
    super();
    this.state = {
      indexValue: '',
      result: '',
    }
  this.handleChange = this.handleChange.bind(this);
  this.getIthValue = this.getIthValue.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({ indexValue: Number(event.target.value) });
  }

  getIthValue(val) {
    let i;
    let arr = [7,5];
    let result;
    for (i = 0; i < val; i++) {
      arr.push(arr[i] + arr[i + 1])
    }
    console.log(arr);
    result = arr[arr.length - 2];
    this.setState({ result });
  }

  render() {
    return (
      <div className="calculator container d-flex flex-column align-items-center border border-dark p-2">
        <label className="form-control-label w-50" htmlFor="indexValue"><h4>Enter Index</h4>
          <input
            type="number"
            className="form-control"
            name="indexValue"
            aria-describedby="indexValueHelp"
            placeholder="e.g. 10"
            value={this.state.indexValue}
            onChange={this.handleChange}
            required
          />
        </label>
        <button className="btn btn-dark straighten mt-3" onClick={() => this.getIthValue(this.state.indexValue)}>
          <h5>Get Index Value</h5>
        </button>
        <h3 className="mt-3">Result</h3>
        <div className="h-25 mb-3">
        <input className="form-control" value={this.state.result} />
        </div>
      </div>
    );
  }
}

export default IthValue;