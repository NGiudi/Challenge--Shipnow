import { DEFAULT_THEME, LOCALSTORAGE_PREFIX } from "../constants/settings";

/**
 * @return {string} preference theme.
 */
export const getStoragedTheme = () => {
	const savedTheme = localStorage.getItem(`${LOCALSTORAGE_PREFIX}-theme`);
	return savedTheme || DEFAULT_THEME;
};

/**
 * @param {string} theme preference theme.
 */
export const setStoragedTheme = (theme) => {
	localStorage.setItem(`${LOCALSTORAGE_PREFIX}-theme`, theme );
};