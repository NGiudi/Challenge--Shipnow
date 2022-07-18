import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SettingsContext = createContext();

export const SettingsProvider = (props) => {
	// settigns variables.
	const [openSidebar, setOpenSidebar] = useState(null);

	return (
		<SettingsContext.Provider value={{
			openSidebar, setOpenSidebar
		}}>
			{props.children}      
		</SettingsContext.Provider>
	);
};

SettingsProvider.propTypes = {
	children: PropTypes.node,
};

SettingsProvider.defaultProps = {
	children: null,
};