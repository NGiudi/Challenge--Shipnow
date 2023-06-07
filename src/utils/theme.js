import { getLocalStorage } from "./storage";

import { DEFAULT_THEME } from "../constants/settings";

export const getTheme = () => {
	const storagedTheme = getLocalStorage("theme");
	let OStheme = "light";

	if (window.matchMedia &&  window.matchMedia("(prefers-color-scheme: dark)").matches) {
		OStheme = "dark";
	}

	return storagedTheme || OStheme || DEFAULT_THEME;
};