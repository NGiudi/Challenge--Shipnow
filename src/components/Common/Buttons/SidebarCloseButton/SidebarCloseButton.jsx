import React, { useContext } from "react";

/* context */
import { SettingsContext } from "../../../../context/SettingsContext";

/* components */
import { Button } from "../../../../design_system";

const CloseButton = () => {
	const { setOpenSidebar } = useContext(SettingsContext);
  
	return (
		<Button 
			fullWidth
			kind="ghost"
			margin="0 0 12px 0"
			onClick={() => setOpenSidebar(null)}
		>
			Volver
		</Button>
	);
};

export default CloseButton;