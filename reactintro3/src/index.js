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

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
   
  }

  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]} 
      onClick={()=>this.handleClick(i)}
    />;
  }

  handleClick(i) {
    const squares = this.state.squares.slice(); // copy
    console.log(calculateWinner(squares));
    if (calculateWinner(squares) || squares[i]) 
      return;

    squares[i] = 'X';
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ 
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status = "";

    if (winner) {
      status = `Win: ${winner}`
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
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
  lines.forEach((e, i) => {
    const [a, b, c] = e;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    console.log(squares[a]);
      return squares[a];
    }
  });
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
