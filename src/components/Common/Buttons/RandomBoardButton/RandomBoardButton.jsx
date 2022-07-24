import React, { useContext } from "react";

/* import context */
import { BoardContext } from "../../../../context/BoardContext";

/* import ds components */
import { Button } from "../../../../design_system";

/* import utils */
import { createBoard } from "../../../../utils/board";

const RandomBoardButton = () => {
	const { columns, rows, setBoard } = useContext(BoardContext);
  
	const createRandomBoard = () => {
		setBoard(createBoard(rows, columns, null, true));
	};

	return (
		<Button onClick={createRandomBoard}>
      Crear tablero random
		</Button>
	);
};

export default RandomBoardButton;