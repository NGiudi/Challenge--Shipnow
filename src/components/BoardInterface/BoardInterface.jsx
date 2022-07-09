import React from "react";
import PropTypes from "prop-types";

// imports from material ui.
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import { IconButton, Tooltip } from "@material-ui/core";

// import from local files.
import { INCREMENT_MOVE_BOARD } from "../../constants/settings";

const BoardInterface = (props) => {
	const { refBoard } = props; 

	let top=50, left=50;// init in the center board.

	const centerBoard = () => {
		top=50;
		left=50;
		refBoard.current.style.top = `${top}%`;
		refBoard.current.style.left = `${left}%`;
	};

	const moveUp = () => {
		top -= INCREMENT_MOVE_BOARD;
		refBoard.current.style.top = `${top}%`;
	};
  
	const moveDown = () => {
		top += INCREMENT_MOVE_BOARD;
		refBoard.current.style.top = `${top}%`;
	};
  
	const moveLeft = () => {
		left -= INCREMENT_MOVE_BOARD;
		refBoard.current.style.left = `${left}%`;
	};

	const moveRight = () => {
		left += INCREMENT_MOVE_BOARD;
		refBoard.current.style.left = `${left}%`;
	}; 

	return (
		<div className="box-game">
			<div className="btn-center">
				<Tooltip title="Centrar tablero">
					<IconButton color="inherit" onClick={centerBoard}>
						<AspectRatioIcon/>
					</IconButton>
				</Tooltip>
			</div>

			<IconButton color="inherit" onClick={moveUp}>
				<KeyboardArrowUpIcon/>
			</IconButton>
      
			<div className="box-board-flex">
				<IconButton color="inherit" onClick={moveLeft}>
					<KeyboardArrowLeftIcon/>
				</IconButton>
        
				<div className="container-box-board">
					{props.children}
				</div>
        
				<IconButton color="inherit" onClick={moveRight}>
					<KeyboardArrowRightIcon/>
				</IconButton>
			</div>
      
			<IconButton color="inherit" onClick={moveDown}>
				<KeyboardArrowDownIcon/>
			</IconButton>   
		</div>
	);
};

BoardInterface.propTypes = {
	children: PropTypes.node,
	refBoard: PropTypes.object,
};

BoardInterface.defaultProps = {
	children: null,
	refBoard: null,
};

export default BoardInterface;
