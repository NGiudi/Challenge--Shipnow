import React, { useContext } from "react";

/* import context */
import { BoardContext } from "../../../../context/BoardContext";

/* import components */
import { Button } from "../../../../design_system";

/* import helpers */
import { createBoard } from "../../../../utils/board";

const ResetButton = () => {
	const { columns, isRunning, rows, setBoard, setCount } = useContext(BoardContext);

	const handleRestart = () => {
		setBoard(createBoard(rows, columns));
		setCount(0);
	};

	return (
		<Button disabled={isRunning} margin="0 8px 0 0" onClick={handleRestart}>
				Reiniciar
		</Button>
	);
};

export default ResetButton;
