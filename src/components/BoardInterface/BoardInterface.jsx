import React from "react";
import PropTypes from "prop-types";

/* import icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* import ds components */
import { Flex } from "../../design_system";

/* import styles */
import { BoardContainer, BtnCenter, GameArea } from "./BoardInterface.styles";

/* import from local files */
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
		<>
			<GameArea>
				<BtnCenter onClick={centerBoard}>
					<FontAwesomeIcon icon="expand" />
				</BtnCenter>
				
				<div onClick={moveUp}>
					<FontAwesomeIcon icon="chevron-up" />
				</div>
      
				<Flex alignItems="center">
					<div onClick={moveLeft}>
						<FontAwesomeIcon icon="chevron-left"/>
					</div>

					<BoardContainer>
						{props.children}
					</BoardContainer>

					<div onClick={moveRight}>
						<FontAwesomeIcon icon="chevron-right" />
					</div>
				</Flex>

				<div onClick={moveDown}>
					<FontAwesomeIcon icon="chevron-down" />  
				</div>
			</GameArea>

		</>
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
