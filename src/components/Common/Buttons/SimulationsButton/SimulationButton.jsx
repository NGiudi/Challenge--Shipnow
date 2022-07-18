import React, { useContext } from "react";

/* import context */
import { SettingsContext } from "../../../../context/SettingsContext";

/* import components */
import Button from "../../../../design_system/Button/Button";

const SimulationButton = () => {
	const { setOpenSidebar } = useContext(SettingsContext);

	return (
		<Button onClick={() => setOpenSidebar("simulations")}>
      Simulaciones
		</Button>
	);
};

export default SimulationButton;