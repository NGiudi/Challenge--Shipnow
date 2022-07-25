import React from "react";
import PropTypes from "prop-types";

import { InputField } from "../../../../design_system";

const TimeInput = (props) => {
	const { errors, touched } = props;

	return (
		<InputField
			iserror={errors.time && touched.time}
			label="Intervalo de tiempo"
			name="time"
			type="number"
		/>
	);
};

TimeInput.propTypes = {
	errors: PropTypes.object,
	touched: PropTypes.object,
};

TimeInput.defaultProps = {
	errors: null,
	touched: null,
};

export default TimeInput;