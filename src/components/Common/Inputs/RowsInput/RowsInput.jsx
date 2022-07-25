import React from "react";
import PropTypes from "prop-types";

import { InputField } from "../../../../design_system";

const RowsInput = (props) => {
	const { errors, touched } = props;

	return (
		<InputField
			iserror={errors.rows && touched.rows}
			label="Filas"
			name="rows"
			type="number"
		/>
	);
};

RowsInput.propTypes = {
	errors: PropTypes.object,
	touched: PropTypes.object,
};

RowsInput.defaultProps = {
	errors: null,
	touched: null,
};

export default RowsInput;