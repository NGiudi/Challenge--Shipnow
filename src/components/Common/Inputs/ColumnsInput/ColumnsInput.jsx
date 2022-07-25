import React from "react";
import PropTypes from "prop-types";

import { InputField } from "../../../../design_system";

const ColumnsInput = (props) => {
	const { errors, touched } = props;

	return (
		<InputField
			iserror={errors.columns && touched.columns}
			label="Columnas"
			name="columns"
			type="number"
		/>
	);
};

ColumnsInput.propTypes = {
	errors: PropTypes.object,
	touched: PropTypes.object,
};

ColumnsInput.defaultProps = {
	errors: null,
	touched: null,
};

export default ColumnsInput;