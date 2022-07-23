/**
 * @param {number} max max value return.
 * @return {number} random number between 0 and maximum.
 */
export const randomNumber = (max) => {
	return Math.floor(Math.random() * max);
};