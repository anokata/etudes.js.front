import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./store";
import { sumOfPack } from "./banknote";

export default function Main(props) {
  return <ATMdispatched />;
}

const numArray = (n) => Array.from(Array(n).fill(0).keys());

const CLEAR_VALUE = "CLR";
const COMMA = ",";
const variants = [
  [
    { dignity: 5000, count: 100 },
    { dignity: 2000, count: 400 },
    { dignity: 1000, count: 1000 },
    { dignity: 500, count: 3000 },
    { dignity: 200, count: 5000 },
    { dignity: 100, count: 8000 },
    { dignity: 50, count: 10000 },
  ],
  [
    { dignity: 5000, count: 476 },
    { dignity: 2000, count: 345 },
    { dignity: 1000, count: 6741 },
    { dignity: 500, count: 4362 },
    { dignity: 200, count: 234 },
    { dignity: 100, count: 1643 },
    { dignity: 50, count: 3450 },
  ],
  [
    { dignity: 5000, count: 234 },
    { dignity: 2000, count: 678 },
    { dignity: 1000, count: 845 },
    { dignity: 500, count: 2451 },
    { dignity: 200, count: 9654 },
    { dignity: 100, count: 2345 },
    { dignity: 50, count: 234 },
  ],
  [
    { dignity: 5000, count: 546 },
    { dignity: 2000, count: 562 },
    { dignity: 1000, count: 2543 },
    { dignity: 500, count: 4365 },
    { dignity: 200, count: 2154 },
    { dignity: 100, count: 124 },
    { dignity: 50, count: 342 },
  ],
  [
    { dignity: 5000, count: 2732 },
    { dignity: 2000, count: 347 },
    { dignity: 1000, count: 479 },
    { dignity: 500, count: 7556 },
    { dignity: 200, count: 3296 },
    { dignity: 100, count: 1257 },
    { dignity: 50, count: 3854 },
  ],
  [
    { dignity: 5000, count: 73 },
    { dignity: 2000, count: 147 },
    { dignity: 1000, count: 279 },
    { dignity: 500, count: 356 },
    { dignity: 200, count: 696 },
    { dignity: 100, count: 857 },
    { dignity: 50, count: 854 },
  ],
];

class ATM extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.take = this.take.bind(this);
    this.loadVariant = this.loadVariant.bind(this);
    this.handleNumpadInput = this.handleNumpadInput.bind(this);
    this.state = {
      value: "8550",
      info: "",
      infoVisible: "info-hide",
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
    const banknotes = this.props.selectBanknotes;
    const newInfo = banknotes
      .map((e) => `${e.dignity}=${e.count}`) // <span digniti>
      .reduce((acc, b) => `${acc}, ${b}`);
    this.setState({
      info: newInfo,
      infoVisible: "info-show",
    });
    setTimeout(() => {
      this.hideInfo();
    }, 300000);
  }

  hideInfo = () => {
    this.setState({
      infoVisible: "info-hide",
    });
  };

  take() {
    this.props.take(this.state.value.replace(COMMA, "."));
  }

  showTaked() {
    return (
      <div>
        {this.props.selectGivePack.map((b, i) => (
          <div key={i}>
            {b.dignity}={b.count}{" "}
          </div>
        ))}
        Осталось: {this.props.selectLast}
      </div>);
  }

  loadVariant(n) {
    this.props.restore(variants[n]);
  }

  render() {
    const variantButtons = numArray(6).map((i) => (
      <button
        className="variant-btn"
        key={i}
        onClick={() => this.loadVariant(i)}
      >
        {" "}
        Вариант {i + 1}{" "}
      </button>
    ));

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
              {variantButtons}
              <div
                className={("info", this.state.infoVisible)}
                onPointerDown={() => this.hideInfo()}
              >
                <div className="info-content">{this.state.info}</div>
              </div>
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
