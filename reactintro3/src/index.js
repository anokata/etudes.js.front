import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button 
      className="square" 
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {

  renderSquare(i) {
    return <Square  key={i}
      value={this.props.squares[i]} 
      onClick={()=>this.props.onClick(i)}
    />;
  }

  makeRow3(startIndex) {
    return Array(3).fill(null).map((e, i) => {
        return this.renderSquare(i + startIndex);
      });
  }

  makeBoard3() {
    const board = [];
    for (const i of [0,3,6]) {
      board.push(<div className="board-row" key={i}>{this.makeRow3(i)}</div>);
    }
    return board;
  }

  render() {
    return (
      <div>
        {this.makeBoard3()}
      </div>
    );
  }
}

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [{ 
        squares: Array(9).fill(null),
        move: "(start)",
      }],
      xIsNext: true,
      stepNumber: 0,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) 
      return;

    squares[i] = 'X';
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ 
      history: history.concat([{
        squares: squares,
        move: this.getMoveDesc(i),
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }
  
  getCurrent() {
    const history = this.state.history;
    const current = history[history.length-1];
    return current;
  }

  jumpTo(index) {
    this.setState({
      stepNumber: index,
      xIsNext: (index % 2) === 0,
    });
  }

  getMoveDesc(index) {
    index++;
    const row = Math.ceil(index / 3);
    const col = (index-1) % 3 + 1;
    return `(${row}:${col})`;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status = "";

    if (winner) {
      status = `Win: ${winner}`
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    const moves = history.map((step, index) => {
      const label = index ? `Go to step #${index}` : "Go to start";
      const move = step.move;
      return (
        <li key={index}>
          <button className={this.state.stepNumber === index ? "selected" : ""} onClick={() => {this.jumpTo(index)}}>{label} {move}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => {this.handleClick(i)}}
          />
        </div>
        <div className="game-info">
          <h3>{status}</h3>
          <h4>Steps: {this.state.stepNumber}</h4>
          <ol>{moves}</ol>
        </div>
        <LifeList input="[some]" />
      </div>
    );
  }
}

class LifeList extends React.Component {
  render() {
    return (
      <div className="list">
        <ul>input = {this.props.input}.
          <li>001</li>
          <li>002</li>
          <li>003</li>
          <li>004</li>
          <li>005</li>
        </ul>
      </div>
    );
  }
}

// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let e of lines) {
    const [a, b, c] = e;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  };
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
