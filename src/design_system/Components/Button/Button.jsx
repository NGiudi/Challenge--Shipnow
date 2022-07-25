import React from "react";
import PropTypes from "prop-types";

import { BtnStyles } from "./Button.styles";

const Button = (props) => {
	return (
		<BtnStyles {...props} />
	);
};

Button.propTypes = {
	fullWidth: PropTypes.bool,
	round: PropTypes.bool,
	kind: PropTypes.oneOf(["ghost", "solid"]),
};

Button.defaultProps = {
	fullWidth: false,
	round: false,
	kind: "solid",
};

export default Button;