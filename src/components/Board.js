import React, { useContext } from 'react';

// import from local files.
import { BoardContext } from '../context/BoardContext';
import Cell from './Cell';

function Board() {
  const { board } = useContext(BoardContext);
  
  return (
    <div className="box-board">
      {
        board.map((row, y) => {
          return (
            <div key={y} className="flex">
              {
                row.map((life, x) => {
                  return <Cell key={x} life={life} posY={y} posX={x} />
                })
              }
            </div>
          );
        })
      }
    </div>
  )
}

export default Board;