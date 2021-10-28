import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { deposite, take } from "./store";

export default function Main(props) {
  return <ATMdispatched />;
}

const CLEAR_VALUE = "CLR";
const COMMA = ",";

class ATM extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleNumpadInput = this.handleNumpadInput.bind(this);
    this.state = {
      value: "5432",
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
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

  render() {
    return (
      <React.Fragment>
        <input
          label="Get"
          type="text"
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={() => this.props.take(this.state.value)}>Выдача</button>

        <Numpad onNumpadInput={this.handleNumpadInput} />
        <button onClick={() => this.props.deposite("2")}>Занести</button>
        <button>Загрузить вариант</button>
      </React.Fragment>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deposite: (data) => {
      dispatch(deposite(data));
    },
    take: (amount) => {
      dispatch(take(amount));
    },
  };
};
const ATMdispatched = connect(null, mapDispatchToProps)(ATM);
