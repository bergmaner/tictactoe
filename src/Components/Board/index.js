import React, { Component } from 'react';
import Square from '../Square';
import './style.css';

export class Board extends Component {
  
    renderSquare(n)
    {
        return <Square  value={this.props.squares[n]} onClick = {() => this.props.onClick(n)}></Square>
    }
    render() {
        return (
            <div className = "board">
                <div className = "board-row">
                   {this.renderSquare(0)}
                   {this.renderSquare(1)} 
                   {this.renderSquare(2)} 
                 </div>
                 <div className = "board-row">
                   {this.renderSquare(3)}
                   {this.renderSquare(4)} 
                   {this.renderSquare(5)} 
                 </div>
                 <div className = "board-row">
                   {this.renderSquare(6)}
                   {this.renderSquare(7)} 
                   {this.renderSquare(8)} 
                 </div>
            </div>
        )
    }
}

export default Board
