import React, { useContext } from "react";

/* import context */
import { BoardContext } from "../../../../context/BoardContext";

/* import components */
import Button from "../../../../design_system/Button/Button";

const NextGenerationButton = () => {
	const { isRunning, nextGeneration } = useContext(BoardContext);

	return (
		<Button onClick={nextGeneration} disabled={isRunning}>
			Próxima
		</Button>
	);
};

export default  NextGenerationButton;