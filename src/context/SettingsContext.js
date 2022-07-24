import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

/* import utils */
import { setLocalStorage } from "../utils/storage";
import { getTheme } from "../utils/theme"; 

export const SettingsContext = createContext();

export const SettingsProvider = (props) => {
	// settigns variables.
	const [openSidebar, setOpenSidebar] = useState(null);

	const [theme, setThemeState] = useState(() => getTheme());

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