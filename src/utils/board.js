import { getNextLife, countLivingNeighbors } from "./cell";
import { randomNumber } from "./numbers";

/**
 * @param {number} rows total number of rows.
 * @param {number} columns total number of columns.
 * @param {object} board saved matrix with the life value of the cells.
 * @param {boolean} random if true create a random board.
 * @return {object} board matrix with the life value of the cells.
 */
export const createBoard = (rows, columns, paramBoard = null, random = false) => {
	let board = [];
  
	for (let y=0; y < rows; y++) {
		board[y] = [];

		for (let x=0; x < columns; x++) {
			// received paramBoard when the saved game loads or change the board dimensions.
			// the dimensions are verified for the cases that the board is enlarged.
			if (paramBoard && x < paramBoard[0].length && y < paramBoard.length)
				board[y][x] = paramBoard[y][x];
			else if (random)
				board[y][x] = randomNumber(2);
			else
				board[y][x] = 0;
		}
	}

	return board;
};

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
			neighbors = countLivingNeighbors(x, y, board, rows, columns);   
			life = getNextLife(neighbors, board[y][x]);
			// create new board.
			newBoard[y][x] = life; 
		}
	}
	return newBoard;
}; 