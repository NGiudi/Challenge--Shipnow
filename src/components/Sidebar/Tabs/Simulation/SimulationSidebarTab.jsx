import React, { useContext } from "react";

/* import hooks */
import { useSnackbar } from "notistack";

/* import context */
import { BoardContext } from "../../../../context/BoardContext";

/* ds components */
import { Button } from "../../../../design_system";

/* import constants */
import { LOCALSTORAGE_PREFIX } from "../../../../constants/settings";

const SimulationSidebarTab = () => {
	const { board, count, isRunning, setColumns, setBoard, setCount, setRows } = useContext(BoardContext);
	
	const { enqueueSnackbar } = useSnackbar();
  

	// save generation functions.
	const actionButton = () => (
		<>
			<Button onClick={() => { saveGeneration(true); }}>
        Reemplazar
			</Button>
		</>
	);

	const saveGeneration = (force) => {
		const generation = localStorage.getItem(`${LOCALSTORAGE_PREFIX}-simulation`);

		// check if exist a generation saved.
		// force is used to replace the saved generation.
		if (!generation || force) {
			// board is transformed into a string to be stored in the localstorage
			localStorage.setItem(`${LOCALSTORAGE_PREFIX}-simulation`, JSON.stringify({ board, generation: count }));
			// show success message.
			enqueueSnackbar("Generación guardada con éxito.", { variant: "success" });
		} else {
			// show error message.
			enqueueSnackbar("Ya existe un juego guardado.", { variant: "error", action: actionButton });
		}
	};

	// load generation functions.
	const getSavedGeneration = () => {
		let storage = localStorage.getItem(`${LOCALSTORAGE_PREFIX}-simulation`);

		// check if exist a generation saved.
		if (storage) {
			// transform the saved generation in a matrix board.
			storage = JSON.parse(storage);
			// set life values and dimentions board. reset count.
			setColumns(storage.board[0].length);
			setRows(storage.board.length);
			setBoard(storage.board);
			setCount(storage.generation);
			// show success message.
			enqueueSnackbar("Generación cargada con éxito.", { variant: "success" });
		} else {
			// show error message.
			enqueueSnackbar("No hay ninguna generación guardada.", { variant: "error"});
		}
	};

	return (
		<>
			<Button onClick={() => saveGeneration(false)} disabled={isRunning}>
				Guardar
			</Button>

			<Button onClick={getSavedGeneration} disabled={isRunning}>
				Cargar
			</Button>
		</>
	);
};

export default SimulationSidebarTab;