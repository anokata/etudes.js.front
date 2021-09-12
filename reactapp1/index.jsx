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
return <button>OK</button>;
}
}

// functional component
function Timer(){
    let ms = new Date().getMilliseconds();
    let sec = new Date().getSeconds();
    return <span>{sec}:{ms}</span>;
}

function renderTimer() {
    ReactDOM.render(
        <Timer/>,
        document.getElementById("timer")
    );
}
setInterval(renderTimer, 10);

function tick() {
    ReactDOM.render(
    <div>
    <h3>{new Date().toLocaleTimeString()}.</h3>
    ms:<Timer/>
    </div>,
    document.getElementById("header")
    );
}
setInterval(tick, 1000);

ReactDOM.render(
<div className="dot block-a" style={divStyle}>
<h1>Hello React 
{b}
    ms:<Timer/>
</h1>
<p>{a.map(x=>String.fromCodePoint(x+100))}</p>
</div>,
document.getElementById("app")
);

ReactDOM.render(
<Bitton />,
document.getElementById("app2")
)
