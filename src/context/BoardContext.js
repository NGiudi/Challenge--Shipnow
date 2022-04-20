import React, { createContext, useEffect, useState } from 'react';

import { createBoard, createNextBoard } from '../utils/board';

export const BoardContext = createContext();

export function BoardProvider(props) {
  // settigns variables.
  const [isRunning, setIsRunning] = useState(false);
  const [columns, setColumns ] = useState(50);
  const [rows, setRows] = useState(30);
  const [time, setTime] = useState(300);

  // game variables.
  const [board, setBoard] = useState(createBoard(rows, columns)); 
  const [count, setCount] = useState(0);
  
  const nextGeneration = () => {
    const newBoard = createNextBoard(board, rows, columns);
    setCount(count+1);
    setBoard(newBoard); 
  }
 
  useEffect(() => {
    if (isRunning) {
      const timer= setTimeout (() => {
        nextGeneration();
      }, time);

      return () => clearTimeout(timer);
    }
  });

  useEffect(() => {
    setBoard(board => createBoard(rows, columns, board));
  },[rows, columns]);

  return (
    <BoardContext.Provider value={{  isRunning,  setIsRunning,
                                     count, setCount,
                                     board, setBoard,
                                     columns, setColumns,
                                     rows, setRows,
                                     time, setTime,
                                     nextGeneration,
                                  }}>
      {props.children}      
    </BoardContext.Provider>
  );
}