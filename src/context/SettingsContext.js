import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

/* import utils */
import { getLocalStorage, setLocalStorage } from "../utils/storage";

/* import  */
import { DEFAULT_THEME } from "../constants/settings";

export const SettingsContext = createContext();

export const SettingsProvider = (props) => {
	// settigns variables.
	const [openSidebar, setOpenSidebar] = useState(null);

	//TODO: setear el valor de preferencia de la computadora.
	const [theme, setThemeState] = useState(() => getLocalStorage("theme") || DEFAULT_THEME);

	const setTheme = (theme) => {
		setLocalStorage("theme", theme);
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