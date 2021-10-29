import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./store";
import { sumOfPack } from "./banknote";

export default function Main(props) {
  return <ATMdispatched />;
}

const CLEAR_VALUE = "CLR";
const COMMA = ",";

class ATM extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.take = this.take.bind(this);
    this.handleNumpadInput = this.handleNumpadInput.bind(this);
    this.state = {
      value: "8550",
      info: "",
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleKeydown(e) {
    if (e.key === "Enter") {
      this.take();
    }
    if (e.key === "1") {
    }
  }

  handleNumpadInput(e) {
    const num = e.target.value;
    if (num === CLEAR_VALUE) {
      this.setState({
        value: "",
      });
    } else if (num === COMMA) {
      if (this.state.value.indexOf(COMMA) === -1)
        this.setState({
          value: `${this.state.value}${num}`,
        });
    } else {
      this.setState({
        value: `${this.state.value}${num}`,
      });
    }
  }

  getInfo() {
    console.log(`${this.props.selectBanknotes[0]}`);
    const banknotes = this.props.selectBanknotes;
    const newInfo = banknotes
      .map((e) => `${e.dignity}=${e.count}`)
      .reduce((acc, b) => `${acc}, ${b}`);
    this.setState({
      info: newInfo,
    });
  }

  take() {
    this.props.take(this.state.value);
  }

  showTaked() {
    return this.props.selectGivePack.map((b, i) => (
      <span key={i}>
        {b.dignity}={b.count},{" "}
      </span>
    ));
  }

  render() {
    return (
      <div className="atm-container" autoFocus tabIndex="1" onKeyDown={this.handleKeydown}>
        <div className="atm">
          <input
            label="Get"
            type="text"
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
          />
          <button onClick={this.take}>Выдача</button>

          <Numpad onNumpadInput={this.handleNumpadInput} />
          <button onClick={() => this.getInfo()}>Справка</button>
          <div>Остаток:{sumOfPack(this.props.selectBanknotes)}</div>
        </div>

        <div className="atm-side-info">
          <div>Выдано:{this.showTaked()}</div>
          <div>
            Варианты
            <button>
              купюры 5000= 100; 2000= 400; 1000= 1000; 500= 3000; 200= 5000;
              100= 8000; 50= 10000
            </button>
            <div className="info">{this.state.info}</div>
          </div>
        </div>
      </div>
    );
  }
}

class Numpad extends React.Component {
  render() {
    const buttons = Array.from(Array(9).fill(0).keys()).map((i) => (
      <button
        className="numpad-button"
        onClick={this.props.onNumpadInput}
        key={i}
        value={i + 1}
      >
        {i + 1}
      </button>
    ));
    return (
      <div className="numpad">
        {buttons}
        <button
          className="numpad-button"
          onClick={this.props.onNumpadInput}
          key="0"
          value="0"
        >
          0
        </button>
        <button
          className="numpad-button"
          onClick={this.props.onNumpadInput}
          key={COMMA}
          value={COMMA}
        >
          ,
        </button>
        <button
          className="numpad-button"
          onClick={this.props.onNumpadInput}
          key={CLEAR_VALUE}
          value={CLEAR_VALUE}
        >
          CLR
        </button>
      </div>
    );
  }
}

const ATMdispatched = connect(mapStateToProps, mapDispatchToProps)(ATM);
