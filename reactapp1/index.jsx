const log = console.log;

const a = Array.from(new Array(10).keys());
const b = a.join("-");
const divStyle = {
    color: '#abc',
};

let element1 = <b>hi</b>;
log(element1);

class Bitton extends React.Component {
    render() {
    return <button>OK {this.props.name}</button>;
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

ReactDOM.render(
<Bitton name="Jonk"/>,
document.getElementById("app2")
)
