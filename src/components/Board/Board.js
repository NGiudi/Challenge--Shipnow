import React, { createRef, useContext } from 'react';

// import from local files.
import BoardInterface from '../BoardInterface/BoardInterface';
import { BoardContext } from '../../context/BoardContext';
import Cell from '../Cell/Cell';

function Board() {
  const { board } = useContext(BoardContext);
  const refBoard = createRef();
  
  return (
    <BoardInterface refBoard={refBoard}>
      <div ref={refBoard} className="box-board">
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
    </BoardInterface>
  );
}

export default Board;