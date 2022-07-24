import React, { useContext } from "react";
import PropTypes from "prop-types";

/* import context*/
import { BoardContext } from "../../context/BoardContext";

/* import styles */
import { CellStyles } from "./Cell.styles";

/* import utils */
import { addModelIntoBoard } from "../../utils/board";

const Cell = ({ life, posY, posX }) => {
	const { board, isRunning, modelToInsert, setBoard } = useContext(BoardContext);

	const handleClick = () => {
		if (!isRunning) {
			const pos = { x: posX, y: posY };

			const newBoard = addModelIntoBoard(board, modelToInsert, pos);
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

Cell.defaultProps = {
	life: 0, // values: 0 || 1
	posX: 0,
	posY: 0,
};

export default  Cell;