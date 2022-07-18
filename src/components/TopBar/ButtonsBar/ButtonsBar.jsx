import React from "react";
import PropTypes from "prop-types";

/* import components */
import {
	NextGenerationButton,
	ResetButton,
	SettingsButton,
	SimulationButton,
	StartButton,
} from "../../Common/Buttons";

const ButtonsBar = () => {
	return (
		<div>
			<StartButton />

			<ResetButton />
			
			<NextGenerationButton />

			<SimulationButton />

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