import React, { useContext } from "react";

/* context */
import { SettingsContext } from "../../context/SettingsContext";

/* components */
import SimulationSidebarTab from "./Tabs/Simulation/SimulationSidebarTab";
import SettingsSidebarTab from "./Tabs/Settings/SettingsSidebarTab";
import { SidebarCloseButton } from "../Common/Buttons";

/* styles */
import { SidebarWrapper } from "./Sidebar.styles";

const Sidebar = () => {
	const { openSidebar } = useContext(SettingsContext);
	
	return (
		<SidebarWrapper open={!!openSidebar}>
			<SidebarCloseButton />

			{openSidebar === "settings" && (
				<SettingsSidebarTab />
			)}

			{openSidebar === "simulations" && (
				<SimulationSidebarTab />
			)}
		</SidebarWrapper>
	);
};

export default  Sidebar;