import React, { useContext } from "react";

/* context */
import { SettingsContext } from "../../../context/SettingsContext";

/* components */
import Button from "../../../design_system/Button/Button";

const CloseButton = () => {
	const { setOpenSidebar } = useContext(SettingsContext);
  
	return (
		<Button onClick={() => setOpenSidebar(null)}>Volver</Button>
	);
};

export default CloseButton;