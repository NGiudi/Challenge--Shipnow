import React, { useContext } from "react";

/* import context */
import { SettingsContext } from "../../../../context/SettingsContext";

/* import components */
import Button from "../../../../design_system/Button/Button";

const SettingsButton = () => {
	const { setOpenSidebar } = useContext(SettingsContext);

	return (
		<Button onClick={() => setOpenSidebar(true)}>
      Configuraciones
		</Button>
	);
};

export default SettingsButton;