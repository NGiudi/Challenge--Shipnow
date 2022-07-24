/**
 * @param {number} x position of the neighbor cell.
 * @param {number} y position of the neighbor cell.
 * @param {number} rows total number of rows.
 * @param {number} columns total number of columns.
 * @return {object} return coordinate of neighbor.
 */
export const neighborCoordiante = (x, y, rows, columns) => {
	const xNeighbors = (x + columns) % columns;
	const yNeighbors = (y + rows) % rows;

	return {
		x: xNeighbors,
		y: yNeighbors
	};
};

/**
 * @param {number} sum number of living neighbors.
 * @param {number} life latest cell life value.
 * @return {number} new cell life value.
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

	return nextLife;
};

/**
 * @param {number} x coordinate of the evaluated cell.
 * @param {number} y coordinate of the evaluated cell.
 * @param {object} board matrix with the life value of the cells.
 * @param {number} rows total number of rows.
 * @param {number} columns total number of columns.
 * @return {number} return the sum of the living neighbors.
 */
export const countLivingNeighbors = (x, y, board, rows, columns) => {
	let sum = 0;

	for(let i=-1; i<2; i++) {
		for(let j=-1; j<2; j++) {  
			// the central cell is not a neighbor.
			if(i !== 0 || j !== 0) {
				const coordinate = neighborCoordiante(x + j, y + i , rows, columns);
    
				sum += board[coordinate.y][coordinate.x];
			}
		}
	}

	return sum;
};