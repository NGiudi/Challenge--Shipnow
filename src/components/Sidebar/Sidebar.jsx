import React, { useContext } from "react";

/* context */
import { SettingsContext } from "../../context/SettingsContext";

/* components */
import SimulationSidebarTab from "./Tabs/Simulation/SimulationSidebarTab";
import SettingsSidebarTab from "./Tabs/Settings/SettingsSidebarTab";
import CloseButton from "./CloseButton/CloseButton";

/* styles */
import { SidebarWrapper } from "./Sidebar.styles";

const Sidebar = () => {
	const { openSidebar } = useContext(SettingsContext);
	
	return (
		<SidebarWrapper open={!!openSidebar}>
			<CloseButton />

			{/* TODO: poner esto en otro componente */}
			{openSidebar === "settings" && (
				<SettingsSidebarTab />
			)}

			{/* TODO: poner esto en otro componente */}
			{openSidebar === "simulations" && (
				<SimulationSidebarTab />
			)}
		</SidebarWrapper>
	);
};

export default  Sidebar;