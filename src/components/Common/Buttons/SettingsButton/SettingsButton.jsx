import React, { useContext } from "react";

/* import context */
import { SettingsContext } from "../../../../context/SettingsContext";

/* import components */
import { Button } from "../../../../design_system";

const SettingsButton = () => {
	const { setOpenSidebar } = useContext(SettingsContext);

	return (
		<Button onClick={() => setOpenSidebar("settings")}>
      Configuraciones
		</Button>
	);
};

export default SettingsButton;