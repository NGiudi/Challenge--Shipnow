/**
 * @param {number} rows total number of rows.
 * @param {number} columns total number of columns.
 * @param {object} board saved matrix with the life value of the cells.
 * @return {object} board matrix with the life value of the cells.
 */
export const createBoard = (rows, columns, paramBoard) => {
  let board = [];
  
  for (let y=0; y < rows; y++) {
    board[y] = [];

    for (let x=0; x < columns; x++) {
      // received paramBoard when the saved game loads or change the board dimensions.
      // the dimensions are verified for the cases that the board is enlarged.
      if (paramBoard && x < paramBoard[0].length && y < paramBoard.length)
        board[y][x] = paramBoard[y][x];
      else
        board[y][x] = 0;
    }
  }

  return board;
}

/**
 * @param {number} x coordinate of the evaluated cell.
 * @param {number} y coordinate of the evaluated cell.
 * @param {object} board matrix with the life value of the cells.
 * @param {number} rows total number of rows.
 * @param {number} columns total number of columns.
 * @return {number} return the sum of the living neighbors.
 */
const countLivingNeighbors = (x, y, board, rows, columns) => {
  let xNeighbors, yNeighbors, sum = 0;

  for(let i=-1; i<2; i++) {
    for(let j=-1; j<2; j++) {  
      // the central cell is not a neighbor.
      if(i !== 0 || j !== 0) {
        // calculate coordinates of the neighbors.
        // TODO: poner esto en una funcion.
        xNeighbors = (x + j + columns) % columns;
        yNeighbors = (y + i + rows) % rows;
    
        sum += board[yNeighbors][xNeighbors];
      }
    }
  }

  return sum;
}

/**
 * @param {number} sum number of living neighbors.
 * @param {boolean} life latest cell life value.
 * @return {boolean} new cell life value.
 */
export const getNextLife = (sum, life) => {
  let nextLife = life;
  
  // DEAD 
  // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
  // Any live cell with more than three live neighbours dies, as if by overpopulation.
  if (sum < 2 || sum > 3)
    nextLife = 0;

  // LIFE
  // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
  if (sum === 3)
    nextLife = 1;

  //TODO: return a boolean value.
  return nextLife;
}

/**
 * @param {object} board latest generation board.
 * @param {number}  rows total number of rows.
 * @param {number}  columns total number of columns.
 * @return {object} new generation board.
 */
export const createNextBoard = (board, rows, columns) => {
  let life, neighbors, newBoard = [];

  for (let y=0; y<rows; y++) {
    newBoard[y] = [];

    for (let x=0; x<columns; x++) {
      // count live neighbors.
      neighbors = countLivingNeighbors(x, y, board, rows, columns);   
      // get the new alive status of the cell.
      life = getNextLife(neighbors, board[y][x]);
      // create new board.
      newBoard[y][x] = life; 
    }
  }
  return newBoard;
} 