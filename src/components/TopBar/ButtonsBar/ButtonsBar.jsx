import React, { useContext }  from "react";
import PropTypes from "prop-types";

/* import hooks */
import { useSnackbar } from "notistack";

/* import context */
import { BoardContext } from "../../../context/BoardContext";

/* import components */
import NextGenerationButton from "../../Common/Buttons/NextGenerationButton/NextGenerationButton";
import SettingsButton from "../../Common/Buttons/SettingsButton/SettingsButton";
import ResetButton from "../../Common/Buttons/ResetButton/ResetButton";
import StartButton from "../../Common/Buttons/StartButton/StartButton";

//! Lo voy a eliminar.
import Button from "../../../design_system/Button/Button";

/* import constants */
import { GENERATION_NAME_LOCALSTORAGE } from "../../../constants/settings";

const ButtonsBar = () => {
	const { board, count, isRunning, setBoard, setCount, setColumns, setRows } = useContext(BoardContext);
	
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
		const generation = localStorage.getItem(GENERATION_NAME_LOCALSTORAGE);

		// check if exist a generation saved.
		// force is used to replace the saved generation.
		if (!generation || force) {
			// board is transformed into a string to be stored in the localstorage
			localStorage.setItem(GENERATION_NAME_LOCALSTORAGE, JSON.stringify({ board, generation: count }));
			// show success message.
			enqueueSnackbar("Generación guardada con éxito.", { variant: "success" });
		} else {
			// show error message.
			enqueueSnackbar("Ya existe un juego guardado.", { variant: "error", action: actionButton });
		}
	};

	// load generation functions.
	const getSavedGeneration = () => {
		let storage = localStorage.getItem(GENERATION_NAME_LOCALSTORAGE);

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
		<div>
			<StartButton />

			<ResetButton />
			
			<NextGenerationButton />

			<Button onClick={()=>saveGeneration(false)} disabled={isRunning}>
				Guardar
			</Button>

			<Button onClick={getSavedGeneration} disabled={isRunning}>
				Cargar
			</Button>

			<SettingsButton />
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