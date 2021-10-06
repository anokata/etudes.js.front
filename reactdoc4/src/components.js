import React from "react";
import ReactDOM from "react-dom";

console.log("hi components");

export function ButtonHu(props) {
  return <button className="hu">{props.text}</button>;
}

export class ButtonCu extends React.Component {
  render() {
    return <button className="cu">{this.props.value}</button>;
  }
}

export function ListElem(props) {
  return <li>{props.text}</li>;
}

export function UnsortedList(props) {
  console.log(props.children);
  const elems = Array(props.length | 1)
    .fill(null)
    .map((e, i) => {
      return <ListElem key={i} text={`Elem#${i + 1}`} />;
    });
  return <ul>{elems}</ul>;
}

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      secs: 0,
      wrongSecs: 0,
    };
    console.log("[Clock constructor]");
  }

  render() {
    // console.log("[Clock render]");
    return (
      <div>
        <span>
          Time is:{this.state.date.toLocaleTimeString()} [{this.state.secs}](
          {this.state.wrongSecs})
        </span>
      </div>
    );
  }

  tick() {
    this.setState({
      date: new Date(),
    });
    this.setState({
      wrongSecs: this.state.wrongSecs + 1,
    });
    this.setState((prevState) => ({
      secs: prevState.secs + 1,
    }));
  }

  componentDidMount() {
    console.log("[Clock mount]");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log("[Clock unmount]");
    clearInterval(this.timerID);
  }
}

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      toggled: e.target.checked,
    });
  }

  render() {
    return (
      <div>
        <input
          className="switch"
          name="c1"
          type="checkbox"
          onChange={this.handleChange}
        />
        <label className="switch-label" htmlFor="c1">
          toggler
        </label>
      </div>
    );
  }
}

export class SpoilerParagraph extends React.Component {
  render() {
    if (this.props.hide) return null;
    return <p className="spoiler">{this.props.text}</p>;
  }
}

export class SpoilerBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
    };
  }

  handleClick = () => {
    this.setState((state) => ({
      hide: !state.hide,
    }));
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <button>{this.state.hide ? "show" : "hide"}</button>
        <hr />
        <SpoilerParagraph text={this.props.text} hide={this.state.hide} />
      </div>
    );
  }
}

export class List extends React.Component {
  constructor(props) {
    super(props);
    const elems = props.elems || [];
    this.state = {
      elems: ["0 default"].concat(elems),
    };
  }

  handleClick() {}

  render() {
    const elems = this.state.elems.map((e, i) => (
      <li key={i} tabIndex="1">
        {e}
      </li>
    ));
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Add</button>
        <input type="text" />
        <ul>{elems}</ul>
      </div>
    );
  }
}

const YDCourse = 111.65;
const currencyNames = {  d: '$dollar',  y: 'Yen'};

function yen2dollar(y) { return y/YDCourse; }

function dollar2yen(d) { return d*YDCourse; }

function tryConvert(s, convertF) {
  const input = parseFloat(s);
  if (Number.isNaN(input)) {
    return "";
  }
  const out = convertF(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


export class ShoppingCart extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          };
      }

    render() {
        return (
          <div>
            <CartInput currency="d"/>
            <CartInput currency="y"/>
          </div>
        )
      }
}

export class CartInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accumulatedPrice: 0,
      price: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      price: e.target.value,
      accumulatedPrice: 0,
    });
  }

  render() {
    return (
      <div className="cart" >Cart:
        <input
          type="text"
          value={this.state.price}
          onChange={this.handleChange}
        />{currencyNames[this.props.currency]}
        <BuyingVerdict price={this.state.price} />
      </div>
    );
  }
}

function BuyingVerdict(props) {
  if (props.price < 100) return <p>Want to buy!</p>;
  return <p>Do not need...</p>;
}

// ===============================
const root = (
  <main>
    c<ButtonHu text="hu" />
    <ButtonCu value="CU" />
    <div>
      <UnsortedList length="3">
        text<span>in</span>{" "}
      </UnsortedList>
    </div>
    <Clock />
    <Toggle />
    Conditional Rendering:
    {10 > 5 && <h3>yes</h3>}.{10 < 5 && <h3>no</h3>}.
    {10 < 5 ? <h3>no</h3> : <h3>false</h3>}.
    <SpoilerBlock text="Ipsum maxime explicabo pariatur cum velit Ad mollitia!" />
    <List elems={["1 param", 2, "ccc"]} />
    <ShoppingCart />
  </main>
);

ReactDOM.render(root, document.getElementById("component"));

export let Components = root;
