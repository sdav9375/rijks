import React from 'react';

class Calculator extends React.Component {
  constructor() {
    super();
      this.state = {
        firstNumber: '',
        secondNumber: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleChange(event) {
    console.log(event);
    const { target } = event;
    const { name } = target;
    const { value } = event.target;
    this.setState({
      [name]: value,
      result: '',
    });
  }

  calculate(operation) {
    let first = Number(this.state.firstNumber);
    let second = Number(this.state.secondNumber);
    let added = first + second;
    let subtracted = first - second;
    let multiplied = first * second;
    let divided = first / second;
    switch(operation) {
      case 'add':
        this.setState({ result: added });
        break;
        case 'multiply':
        this.setState({ result: multiplied });
        break;
        case 'subtract':
        this.setState({ result: subtracted });
        break;
        case 'divide':
        this.setState({ result: divided });
        break;
      default:
        this.setState({ result: '' });
    }
  }

  render() {
    return (
      <div className="calculator container d-flex flex-column align-items-center border border-dark">
          <div className="inputs d-flex justify-content-between">
            <label className="form-control-label mx-2 my-1" htmlFor="firstNumber"><h4>1st Number</h4>
              <input
                type="number"
                className="form-control"
                name="firstNumber"
                aria-describedby="firstNumberHelp"
                placeholder="e.g. 10"
                value={this.state.firstNumber}
                onChange={this.handleChange}
                required
              />
            </label>
            <label className="form-control-label mx-2 my-1" htmlFor="secondNumber"><h4>2nd Number</h4>
                <input
                  type="number"
                  className="form-control"
                  name="secondNumber"
                  aria-describedby="secondNumberHelp"
                  placeholder="e.g. 10"
                  value={this.state.secondNumber}
                  onChange={this.handleChange}
                  required
                />
              </label>
          </div>
          <h3 className="mt-3">Operator</h3>
        <div className="row d-flex justify-content-around">
          <button className="btn btn-dark mx-2 operator" onClick={() => this.calculate('add')}><h5>+</h5></button>
          <button className="btn btn-dark mx-2 operator" onClick={() => this.calculate('multiply')}><h5>x</h5></button>
          <button className="btn btn-dark mx-2 operator" onClick={() => this.calculate('subtract')}><h5>-</h5></button>
          <button className="btn btn-dark mx-2 operator" onClick={() => this.calculate('divide')}><h5>/</h5></button>
        </div>
        <h3 className="mt-3">Result</h3>
        <div className="h-25 mb-3">
        <input className="form-control" value={this.state.result} />
        </div>
      </div>
    )
  }
}

export default Calculator;