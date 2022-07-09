import React, { useContext }  from "react";
import PropTypes from "prop-types";

import { useSnackbar } from "notistack";

import { SettingsContext } from "../../../context/SettingsContext";
import { BoardContext } from "../../../context/BoardContext";

import Button from "../../../design_system/Button/Button";
import { createBoard } from "../../../utils/board";

import { GENERATION_NAME_LOCALSTORAGE } from "../../../constants/settings";

const ButtonsBar = () => {
	const { board, columns, isRunning, nextGeneration, rows, setBoard, setCount, setColumns, setIsRunning, setRows } = useContext(BoardContext);
	const { setOpenSidebar } = useContext(SettingsContext);

	const { enqueueSnackbar } = useSnackbar();

	const handleStart = () => setIsRunning((prevValue) => !prevValue);

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
		<div>
			<Button onClick={handleStart}>
				{isRunning ? "Pausar" : "Iniciar"}
			</Button>

			<Button onClick={handleRestart} disabled={isRunning}>
				Reiniciar
			</Button>
			
			<Button onClick={nextGeneration} disabled={isRunning}>
				Próxima
			</Button>

			<Button onClick={()=>saveGeneration(false)} disabled={isRunning}>
				Guardar
			</Button>

			<Button onClick={getSavedGeneration} disabled={isRunning}>
				Cargar
			</Button>
			
			<Button onClick={() => setOpenSidebar(true)}>
				Configuraciones
			</Button>
		</div>
	);
};

ButtonsBar.propTypes = {
	settingsClick: PropTypes.func,
};

ButtonsBar.defaultProps = {
	settingsClick: null,
};

export default ButtonsBar;