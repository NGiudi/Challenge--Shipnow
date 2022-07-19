import React from "react";

import { THEMES } from "../../../../constants/settings";

//TODO: crear el componente de select en la carpeta de ds
const ThemeSelect = (props) => {
	const { ...others } = props;

	return (
		<select name="theme" {...others}>
			{THEMES.map((theme) => {
				return (
					<option key={`theme-select-option-${theme.id}`} value={theme.value}>
						{theme.name}
					</option>
				);
			})}
		</select>
	);
};

export default ThemeSelect;