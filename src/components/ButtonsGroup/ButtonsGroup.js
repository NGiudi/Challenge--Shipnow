import React, { useContext } from "react";

import { useSnackbar } from "notistack";

// import from material-ui.
import { Button, ButtonGroup, Tooltip } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import GetAppIcon from "@material-ui/icons/GetApp";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";
import SaveIcon from "@material-ui/icons/Save";

// import from local files.
import { BoardContext } from "../../context/BoardContext";
import { createBoard } from "../../utils/board";

// import constants.
import { GENERATION_NAME_LOCALSTORAGE } from "../../constants/settings";

function ButtonsGroup() {
	const { board, columns, isRunning, nextGeneration, rows, setBoard, setCount, setColumns, setIsRunning, setRows } = useContext(BoardContext);

	const { enqueueSnackbar } = useSnackbar();

	const handleStart = () => setIsRunning(!isRunning);

	const handleRestart = () => {
		setBoard(createBoard(rows, columns));
		setCount(0);
	};

	// save generation functions.
	const actionButton = () => (
		<>
			<Button onClick={() => { saveGeneration(true); }}>
        Reemplazar
			</Button>
		</>
	);

	const saveGeneration = (force) => {
		const generation = localStorage.getItem(GENERATION_NAME_LOCALSTORAGE);

		// check if exist a generation saved.
		// force is used to replace the saved generation.
		if (!generation || force) {
			// board is transformed into a string to be stored in the localstorage
			localStorage.setItem(GENERATION_NAME_LOCALSTORAGE, JSON.stringify(board));
			// show success message.
			enqueueSnackbar("Generación guardada con éxito.", { variant: "success" });
		} else {
			// show error message.
			enqueueSnackbar("Ya existe un juego guardado.", { variant: "error", action: actionButton });
		}
	};

	// load generation functions.
	const getSavedGeneration = () => {
		let generation = localStorage.getItem(GENERATION_NAME_LOCALSTORAGE);

		// check if exist a generation saved.
		if (generation) {
			// transform the saved generation in a matrix board.
			generation = JSON.parse(generation);
			// set life values and dimentions board. reset count.
			setColumns(generation[0].length);
			setRows(generation.length);
			setBoard(generation);
			setCount(0);
			// show success message.
			enqueueSnackbar("Generación cargada con éxito.", { variant: "success" });
		} else {
			// show error message.
			enqueueSnackbar("No hay ninguna generación guardada.", { variant: "error"});
		}
	};

	return (
		<div className="box-buttons-bar">
			<ButtonGroup variant="contained" color="primary" size="large">
				{isRunning ? (
					<Tooltip title="Pausar">
						<Button onClick={handleStart}>
							<PauseIcon/>
						</Button>
					</Tooltip>
				) : (
					<Tooltip title="Iniciar">
						<Button onClick={handleStart}>
							<PlayArrowIcon/>
						</Button>
					</Tooltip>
				)}

				<Button onClick={handleRestart} disabled={isRunning}>
					<Tooltip title="Reiniciar">
						<StopIcon/>
					</Tooltip>
				</Button>
        
				<Button onClick={nextGeneration} disabled={isRunning}>
					<Tooltip title="Próxima generación">
						<SkipNextIcon/>
					</Tooltip>
				</Button>
        
				<Button onClick={()=>saveGeneration(false)} disabled={isRunning}>
					<Tooltip title="Guardar Generación">
						<SaveIcon/>
					</Tooltip>
				</Button>
        
				<Button onClick={getSavedGeneration} disabled={isRunning}>
					<Tooltip title="Cargar Generación">
						<GetAppIcon/>
					</Tooltip>
				</Button>
			</ButtonGroup>
		</div>
	);
}

export default ButtonsGroup;