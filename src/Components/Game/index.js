import React,{Component} from 'react';
import Board from '../Board';

class Game extends Component {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            xIsNext : true,
            stepNumber:0,
            history:
            [
                { squares: Array(9).fill(null) }
            ]
        }
    }

    checkWinner = (squares) =>
    {
        const possibilities =
        [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i=0 ; i < possibilities.length ; i++)
        {
            const [x,y,z] = possibilities[i];
            if(squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) return squares[x];
            
        }
        return null;

    }
    onClick = (n) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = this.checkWinner(squares);
       if(winner || squares[n]) return ;
        squares[n] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
        console.log(n)
    }

    render()
    {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const squares = current.squares.slice();
        const winner = this.checkWinner(squares);
        let status;
         (winner) ? status = `Winner is ${winner}`  : status = `Winner is ` + this.state.xIsNext ? 'X' : 'O';
  
         return (
    <div className="game">
    <div className = "game-board">
    <Board 
    squares={current.squares}
    onClick = {(n) => this.onClick(n)}
    ></Board>
    <div>{status}</div>
    </div>
    </div>
  );         
}
}

export default Game;
