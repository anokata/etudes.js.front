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
      <div key={i}>
        {b.dignity}={b.count}{" "}
      </div>
    ));
  }

  render() {
    return (
      <div
        className="atm-container"
        autoFocus
        tabIndex="1"
        onKeyDown={this.handleKeydown}
      >
        <div className="atm">
          <div className="remain">
            Остаток:{sumOfPack(this.props.selectBanknotes)}
          </div>
          <input
            className="text-input"
            label="Get"
            type="text"
            value={this.state.value}
            onChange={(e) => this.handleChange(e)}
          />

          <Numpad onNumpadInput={this.handleNumpadInput} />
          <button className="ui-button" onClick={this.take}>
            Выдача
          </button>
          <button className="ui-button" onClick={() => this.getInfo()}>
            Справка
          </button>
        </div>

        <div className="atm-side-info">
          <div className="atm-side-a">
            <div>Выдано:{this.showTaked()}</div>
          </div>
          <div className="atm-side-b">
            <div className="variant-container">
              Загрузить вариант:
              <button className="variant-btn"> Вариант 1 </button>
              <button className="variant-btn"> Вариант 2 </button>
              <button className="variant-btn"> Вариант 3 </button>
              <button className="variant-btn"> Вариант 4 </button>
              <button className="variant-btn"> Вариант 5 </button>
              <div className="info">{this.state.info}</div>
            </div>
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
