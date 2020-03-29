import React,{Component} from 'react';
import Board from '../Board';
import './style.css';
class Game extends Component {

    constructor(props)
    {
        super(props);
        this.state = 
        {
            
            xIsNext : true,
            stepNumber:0,
            level:'vs player',
            history:
            [
                { squares: Array(9).fill(null) }
            ]
        }
    }

    checkBoard = (squares ) =>
    {
        if(squares[0] && squares[1]  && squares[2] 
        && squares[3]  && squares[4] && squares[5]
        && squares[6] && squares[7]  && squares[8])return true;
        else return false;
    }
    doMove = (squares,level) =>
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
        const symbol =this.state.xIsNext ? 'O' : 'X';
        const choice = Math.floor(Math.random() * 9);
        if(!this.checkWinner(squares))
        {
        switch (level)
        {
            case 'easy':
                
                console.log(choice);
                if(!squares[choice])
                {
                
                    squares[choice] = symbol;
                    return choice;
                } 
                else
                {
                    this.doMove(squares,'easy');
                }
            break;
            case 'medium':
                for(let i=0 ; i < possibilities.length ; i++)
        {
            const [x,y,z] = possibilities[i];
            if((!squares[x] && squares[y]===symbol && squares[z] === symbol)) 
            {
                squares[x] = symbol;
                return;
            }
            else if(squares[x] === symbol && !squares[y] && squares[z] === symbol) 
            {
                squares[y] = symbol;
                return ;
            }
            else if(squares[x] === symbol && squares[y] === symbol && !squares[z]) 
            {
                squares[z] = symbol;
                return;
            }
            
        }
         if(!squares[choice])
        {
        
            squares[choice] = symbol;
            return choice;
        } 
        else
        {
            this.doMove(squares,'medium');
        }
            break;
            case 'hard':break;
            case 'vs player':
                this.setState({xIsNext:!this.state.xIsNext})
                break;
        }
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
    restart = () => {
        console.log("hehe");
        this.setState({stepNumber : 0})
    }
    onClick = (n) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = this.checkWinner(squares);
        const level = this.state.level;
       if(winner || squares[n]) return; 
       
        squares[n] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            stepNumber: history.length
        });
        this.doMove(squares,level);
        this.setState({
            history: history.concat({
                squares: squares
            }),
            stepNumber: history.length
        });
       
        
        
        
    }
    selectLevel = () =>
    {
        this.restart();
        const levels = document.querySelector('select');
        const level =levels.options[levels.selectedIndex].value
        this.setState({level : level})
    }
    render()
    {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const squares = current.squares.slice();
        const winner = this.checkWinner(squares);
        const draw = this.checkBoard(squares);
        let status;

      
        

         if(winner) 
         {
             status = `Winner is ${winner}` 
        }  

        else
        {
            status = `Next player is ${this.state.xIsNext ? 'X' : 'O'}`;
        } 
        if (draw)
        {
            status = `Nobody win` 
        }
         return (
    <div className="game">
    <div className ="info">
    <div className = "status">{status}</div>
    <div className="options">
    <select onChange = {(e) => this.selectLevel()}>
		<option>vs player</option>
		<option>easy</option>
        <option>medium</option>
        <option>hard</option>
	</select>
    </div>
    </div>
   
    <Board 
    squares={current.squares}
    clicked = {this.props.clicked}
    onClick = {(n) => this.onClick(n)}
    ></Board>
    
    <button className="restart" onClick = {() => this.restart()}>Restart</button>
   
    
    </div>
  );         
}
}

export default Game;
