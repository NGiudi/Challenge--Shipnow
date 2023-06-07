import React, { useContext } from "react";

/* import context */
import { BoardContext } from "../../../../context/BoardContext";

/* import components */
import { Button } from "../../../../design_system";

const NextGenerationButton = () => {
	const { isRunning, nextGeneration } = useContext(BoardContext);

	return (
		<Button  disabled={isRunning} margin="0 8px 0 0" onClick={nextGeneration}>
			Próxima
		</Button>
	);
};

export default  NextGenerationButton;