import React, { useContext } from "react";
import PropTypes from "prop-types";

import { BoardContext } from "../../context/BoardContext";

import { CellStyles } from "./Cell.styles";

const Cell = ({ life, posY, posX }) => {
	const { board, isRunning, setBoard } = useContext(BoardContext);

	const handleClick = () => {
		if (!isRunning) {
			const newBoard = [...board];

			if (newBoard[posY][posX] === 0)
				newBoard[posY][posX] = 1;
			else
				newBoard[posY][posX] = 0;

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