import React, { useContext } from "react";
import PropTypes from "prop-types";

/* import context */
import { BoardContext } from "../../../context/BoardContext";

/* import components */
import {
	NextGenerationButton,
	ResetButton,
	SettingsButton,
	SimulationButton,
	StartButton,
} from "../../Common/Buttons";

/* import models */
import { MODELS } from "../../../constants/models";

const ButtonsBar = () => {
	const { setModelToInsert } = useContext(BoardContext);
	
	const handleChangeModel = (e) => {
		setModelToInsert(JSON.parse(e.target.value));
	};

	return (
		<div>
			<StartButton />

			<ResetButton />
			
			<NextGenerationButton />

			<SimulationButton />

			<SettingsButton />

			{/* TODO: poner este código en un componente */}
			<select onChange={handleChangeModel}>
				{MODELS.map((model, i) => (
					<option key={`model-option-${i}`} value={JSON.stringify(model.cells)}>
						{model.name}
					</option>))}
			</select>
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