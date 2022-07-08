import React, { createContext, useEffect, useState } from 'react';

import { createBoard, createNextBoard } from '../utils/board';

import { DEFAULT_COLUMS, DEFAULT_TIME, DEFAULT_ROWS } from "../constants/settings";

export const BoardContext = createContext();

export function BoardProvider(props) {
  // settigns variables.
  const [isRunning, setIsRunning] = useState(false);
  const [columns, setColumns ] = useState(DEFAULT_COLUMS);
  const [rows, setRows] = useState(DEFAULT_ROWS);
  const [time, setTime] = useState(DEFAULT_TIME);

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
      const timer = setTimeout (() => {
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