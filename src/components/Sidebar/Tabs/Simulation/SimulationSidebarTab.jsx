import React, { useContext } from "react";

/* import context */
import { BoardContext } from "../../../../context/BoardContext";

/* ds components */
import { Button } from "../../../../design_system";

/* import utils */
import { getLocalStorage, setLocalStorage } from "../../../../utils/storage";

/* import constants */
import { MAX_GENERATINS_STORAGED } from "../../../../constants/settings";

const SimulationSidebarTab = () => {
	const { board, count, isRunning } = useContext(BoardContext);
	
	//Para cargar el tablero tengo que usar la siguiente lógica. 
	//setColumns(storage.board[0].length);
	//setRows(storage.board.length);
	//setBoard(storage.board);
	//setCount(storage.generation);

	const saveGeneration = () => {
		let generations = getLocalStorage("simulation");

		if (generations === null) {
			generations = [];
		} else {
			generations = JSON.parse(generations);
		}

		if (generations.length < MAX_GENERATINS_STORAGED) {
			generations.push({ board, generation: count });
			setLocalStorage("simulation", JSON.stringify(generations));
		} else {
			// TODO: agregar mensaje de espacios completados. 
		}
	};

	const getSavedGenerations = () => {
		let generations = getLocalStorage("simulation");
		generations = JSON.parse(generations);
		
		// check if exist a generation saved.
		if (generations) {
			
			return generations.map((generation, i) => (
				<div key={`saved-generation-${i}`}>
					<p>{i+1}</p>
					<p>Generación: {generation.generation}</p>
				</div>
			));			
		} else {
			return (
				<p>Sin generaciones guardadas</p>
			);
		}
	};

	return (
		<>
			<Button onClick={() => saveGeneration()} disabled={isRunning}>
				Guardar
			</Button>

			{getSavedGenerations()}
		</>
	);
};

export default SimulationSidebarTab;