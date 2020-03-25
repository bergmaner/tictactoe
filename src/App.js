import React from 'react';
import Board from './Components/Board';
function App() {
  return (
    <div className="game">
    <div className = "game-board">
    <Board 
    onClick = {(n) => this.onClick(n)}
    ></Board>
    </div>
    </div>
  );
}

export default App;
