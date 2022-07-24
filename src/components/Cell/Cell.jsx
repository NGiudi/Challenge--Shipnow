import React, { useContext } from "react";
import PropTypes from "prop-types";

import { BoardContext } from "../../context/BoardContext";

import { CellStyles } from "./Cell.styles";

import { neighborCoordiante } from "../../utils/cell";

const Cell = ({ life, posY, posX }) => {
	const { board, columns, isRunning, modelToInsert, rows, setBoard } = useContext(BoardContext);

	const handleClick = () => {
		if (!isRunning) {
			const modelColumns = modelToInsert[0].length;
			const modelRows = modelToInsert.length;
			const newBoard = [...board];

			/* TODO: agregar esto en una función */
			for (let y = 0; y < modelRows; y++) {
				for (let x = 0; x < modelColumns; x++) {
					const pos = neighborCoordiante(posX + x, posY + y, rows, columns);
					newBoard[pos.y][pos.x] = modelToInsert[y][x];
				}
			}

			setBoard(newBoard);
		}
	};

	return (
		<CellStyles isRunning={isRunning} life={life} onClick={handleClick}/>
	);
};

Cell.propTypes = {
	life: PropTypes.number,
	posX: PropTypes.number,
	posY: PropTypes.number,
};

Cell.propTypes = {
	life: 0, // values: 0 || 1
	posX: 0,
	posY: 0,
};

export default  Cell;