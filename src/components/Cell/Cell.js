import React, { useContext } from "react";
import PropTypes from "prop-types";

import { BoardContext } from "../../context/BoardContext";

function Cell({ life, posY, posX }) {
	const { board, isRunning, setBoard } = useContext(BoardContext);

	// click cell.
	const handleClick = () => {
		if (!isRunning) {
			const newBoard = [...board];

			// change life value.
			if (newBoard[posY][posX] === 0)
				newBoard[posY][posX] = 1;
			else
				newBoard[posY][posX] = 0;
      
			// save new board status.
			setBoard(newBoard);
		}
	};

	return (
		<div onClick={handleClick}>
			{ // set background color according to life value. 
				life === 1 ? (
					<div className="cell bgColor"/>
				) : (
					<div className="cell"/>
				)
			}
		</div>
	);
}

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