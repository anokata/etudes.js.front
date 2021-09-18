const log = console.log;

const a = Array.from(new Array(10).keys());
const b = a.join("-");
const divStyle = {
    color: '#abc',
};

let element1 = <b>hi</b>;
log(element1);

class Bitton extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.state = {msg: "hi from state"};
    }
    click(e) {
        log("Clicked", this.props.name, e);
    }
    render() {
        return <div>
            <p>{this.state.msg}</p>
            <button onClick={this.click}>OK {this.props.name}</button> </div>;
}
}
Bitton.defaultProps = {name:"Default"};

// functional component
function Timer(props){
    let ms = new Date().getMilliseconds();
    let sec = new Date().getSeconds();
    return <span style={{color : props.color }}>{sec}:{ms}</span>;
}

function renderTimer() {
    ReactDOM.render(
        <Timer color="#0bd"/>,
        document.getElementById("timer")
    );
}
setInterval(renderTimer, 10);

function tick() {
    ReactDOM.render(
    <div>
    <h3>{new Date().toLocaleTimeString()}.</h3>
    ms:<Timer/>
    <Bitton />,
    </div>,
    document.getElementById("header")
    );
}
setInterval(tick, 1000);

ReactDOM.render(
<div className="dot block-a" style={divStyle}>
<h1>Hello React 
{b}
    ms:<Timer color="#ab0"/>
</h1>
<p>{a.map(x=>String.fromCodePoint(x+100))}</p>
</div>,
document.getElementById("app")
);

class ClickButton extends React.Component {
   constructor(props) {
       super(props);
       this.state = {class: "off", label: "Press me", counter: 0 };
       this.press = this.press.bind(this);
   }

   componentDidMount(){
       console.log("componentDidMount()");
   }
   componentWillUnmount(){
       console.log("componentWillUnmount()");
   }
   shouldComponentUpdate(){
       console.log("shouldComponentUpdate()");
       return true;
   }

   press(){
       let className = (this.state.class==="off")?"on":"off";
       this.setState({class: className});
       this.setState(this.incrementCounter);
       this.setState(this.incrementCounter);
   }

   incrementCounter(prevState, props) {
          return {
            counter: prevState.counter + parseInt(props.increment)
          };
   }

   render() { 
       return <div>
           <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
           <div>Counter: {this.state.counter} <br />Increment: {this.props.increment}</div>
        </div>;
   }
}

ReactDOM.render(
    <Bitton name="Jonk"/>,
    document.getElementById("app2")
);

ReactDOM.render(
    <ClickButton increment="1"  />,
    document.getElementById("appBut")
);
