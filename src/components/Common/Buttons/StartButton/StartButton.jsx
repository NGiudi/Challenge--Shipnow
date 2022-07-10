import React, { useContext } from "react";

/* import context */
import { BoardContext } from "../../../../context/BoardContext";

/* import components */
import Button from "../../../../design_system/Button/Button";

const StartButton = () => {
	const { isRunning, setIsRunning } = useContext(BoardContext);
	
	const handleStart = () => setIsRunning((prevValue) => !prevValue);

	return (
		<Button onClick={handleStart}>
			{isRunning ? "Pausar" : "Iniciar"}
		</Button>
	);
};

export default StartButton;