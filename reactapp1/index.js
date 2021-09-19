const log = console.log;
const a = Array.from(new Array(10).keys());
const b = a.join("-");
const divStyle = {
  color: '#abc'
};
let element1 = /*#__PURE__*/React.createElement("b", null, "hi");
log(element1);

class Bitton extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.state = {
      msg: "hi from state"
    };
  }

  click(e) {
    log("Clicked", this.props.name, e);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, this.state.msg), /*#__PURE__*/React.createElement("button", {
      onClick: this.click
    }, "OK ", this.props.name), " ");
  }

}

Bitton.defaultProps = {
  name: "Default"
}; // functional component

function Timer(props) {
  let ms = new Date().getMilliseconds();
  let sec = new Date().getSeconds();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: props.color
    }
  }, sec, ":", ms);
}

function renderTimer() {
  ReactDOM.render( /*#__PURE__*/React.createElement(Timer, {
    color: "#0bd"
  }), document.getElementById("timer"));
}

setInterval(renderTimer, 10);

function tick() {
  ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, new Date().toLocaleTimeString(), "."), "ms:", /*#__PURE__*/React.createElement(Timer, null), /*#__PURE__*/React.createElement(Bitton, null), ","), document.getElementById("header"));
}

setInterval(tick, 1000);
ReactDOM.render( /*#__PURE__*/React.createElement("div", {
  className: "dot block-a",
  style: divStyle
}, /*#__PURE__*/React.createElement("h1", null, "Hello React", b, "ms:", /*#__PURE__*/React.createElement(Timer, {
  color: "#ab0"
})), /*#__PURE__*/React.createElement("p", null, a.map(x => String.fromCodePoint(x + 100)))), document.getElementById("app"));

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "off",
      label: "Press me",
      counter: 0
    };
    this.press = this.press.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount()");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate()");
    return true;
  }

  press() {
    let className = this.state.class === "off" ? "on" : "off";
    this.setState({
      class: className
    });
    this.setState(this.incrementCounter);
    this.setState(this.incrementCounter);
  }

  incrementCounter(prevState, props) {
    return {
      counter: prevState.counter + parseInt(props.increment)
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: this.press,
      className: this.state.class
    }, this.state.label), /*#__PURE__*/React.createElement("div", null, "Counter: ", this.state.counter, " ", /*#__PURE__*/React.createElement("br", null), "Increment: ", this.props.increment));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Bitton, {
  name: "Jonk"
}), document.getElementById("app2"));
ReactDOM.render( /*#__PURE__*/React.createElement(ClickButton, {
  increment: "1"
}), document.getElementById("appBut"));

class ClockTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "Timer"
    };
    this.unmount = this.unmount.bind(this);
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("clocktimer"));
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
    console.log("componentDidMount()");
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    console.log("componentWillUnmount()");
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F ", this.state.date.toLocaleTimeString(), "."), /*#__PURE__*/React.createElement("button", {
      onClick: this.unmount
    }, "Unmount"));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(ClockTimer, null), document.getElementById("clocktimer"));
