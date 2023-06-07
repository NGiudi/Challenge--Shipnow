import React, { useContext } from "react";

/* import context */
import { SettingsContext } from "../../../../context/SettingsContext";

/* import components */
import { Button } from "../../../../design_system";

const SettingsButton = () => {
	const { setOpenSidebar } = useContext(SettingsContext);

	return (
		<Button margin="0 8px 0 0" onClick={() => setOpenSidebar("settings")}>
      Configuraciones
		</Button>
	);
};

export default SettingsButton;