/**
 * @param {number} x position of the neighbor cell.
 * @param {number} y position of the neighbor cell.
 * @param {number} rows total number of rows.
 * @param {number} columns total number of columns.
 * @return {object} return coordinate of neighbor.
 */
export const NeighborCoordiante = (x, y, rows, columns) => {
  const xNeighbors = (x + columns) % columns;
  const yNeighbors = (y + rows) % rows;

  return {
    x: xNeighbors,
    y: yNeighbors
  };
};