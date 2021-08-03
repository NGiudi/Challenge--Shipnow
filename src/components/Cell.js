import React, {useContext} from 'react';

import { BoardContext } from '../context/BoardContext';

function Cell({ life, posY, posX }) {
  const { board, isRunning, setBoard } = useContext(BoardContext);

  // click cell.
  const handleClick = () => {
    if (!isRunning) {
      const newBoard = [...board];

      // change life value.
      if (newBoard[posY][posX] === 0)
        newBoard[posY][posX] = 1;
      else
        newBoard[posY][posX] = 0;
      
      // save new board status.
      setBoard(newBoard);
    }
  }

  return (
    <div onClick={handleClick}>
      { // set background color according to life value. 
        life === 1 ? (
          <div className="cell bgColor"/>
        ) : (
          <div className="cell"/>
        )
      }
    </div>
  );
}

export default  Cell;