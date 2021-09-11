
const a = Array.from(new Array(10).keys());
const b = a.join("-");
const divStyle = {
    color: '#abc',
};

class Bitton extends React.Component {
render() {
return <button>OK</button>;
}
}

ReactDOM.render(
<div className="dot block-a" style={divStyle}>
<h1>Hello React 
{b}
</h1>
<p>{a.map(x=>String.fromCodePoint(x+100))}</p>
</div>,
document.getElementById("app")
);

ReactDOM.render(
<Bitton />,
document.getElementById("app2")
)
