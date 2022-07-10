import React, { useContext } from "react";

/* import context */
import { BoardContext } from "../../../../context/BoardContext";

/* import components */
import Button from "../../../../design_system/Button/Button";

/* import helpers */
import { createBoard } from "../../../../utils/board";

const ResetButton = () => {
	const { columns, isRunning, rows, setBoard, setCount } = useContext(BoardContext);

	const handleRestart = () => {
		setBoard(createBoard(rows, columns));
		setCount(0);
	};

	return (
		<Button onClick={handleRestart} disabled={isRunning}>
				Reiniciar
		</Button>
	);
};

export default ResetButton;
