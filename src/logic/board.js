// create empty board (all cell dead).
export const createBoard = (rows, columns) => {
  let board = [];
  
  for (let y=0; y<rows; y++) {
    board[y] = [];
      
    for (let x=0; x<columns; x++) {
      board[y][x] = 0; // dead cell.
    }
  }
  return board;
}

// return the sum of the neighbors.
const countNeighbors = (x, y, board, rows, columns) => {
  let xNeighbors, yNeighbors, sum = 0;

  for(let i=-1; i<2; i++) {
    for(let j=-1; j<2; j++) {
      // calculate coordinates of the neighbors.
      xNeighbors = (x + j + columns) % columns;
      yNeighbors = (y + i + rows) % rows;
      
      // the central cell is not a neighbor.
      if(i !== 0 || j !== 0)
        sum += board[yNeighbors][xNeighbors];
    }
  }
  return sum;
}

// checking conway's laws.
export const getNextLife = (sum, life) => {
  let nextLife = life;
  
  // DEAD 
  // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
  // Any live cell with more than three live neighbours dies, as if by overpopulation.
  if (sum<2 || sum>3)
    nextLife = 0;

  // LIFE
  // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  if (sum === 3)
    nextLife = 1;

  return nextLife;
}

export const createNextBoard = (board, rows, columns) => {
  let life, neighbors, newBoard = [];

  for (let y=0; y<rows; y++) {
    newBoard[y] = [];

    for (let x=0; x<columns; x++) {
      // count live neighbors.
      neighbors = countNeighbors(x, y, board, rows, columns);   
      // get the new alive status of the cell.
      life = getNextLife(neighbors, board[y][x]);
      // create new board.
      newBoard[y][x] = life; 
    }
  }
  return newBoard;
} 