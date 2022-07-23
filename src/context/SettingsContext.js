import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

import { getStoragedTheme, setStoragedTheme } from "../utils/storage";

export const SettingsContext = createContext();

export const SettingsProvider = (props) => {
	// settigns variables.
	const [openSidebar, setOpenSidebar] = useState(null);
	const [theme, setThemeState] = useState(() => getStoragedTheme()); //TODO: setear el valor de preferencia de la computadora.

	const setTheme = (theme) => {
		setStoragedTheme(theme);
		setThemeState(theme);
	};

	return (
		<SettingsContext.Provider value={{
			openSidebar, setOpenSidebar,
			theme, setTheme,
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