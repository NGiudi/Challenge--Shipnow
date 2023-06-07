import React from "react";
import PropTypes from "prop-types";

import { FlexWrapper } from "./Flex.styles";

const Flex = (props) => {
	return (
		<FlexWrapper {...props} />
	);
};

Flex.propTypes = {
	alignItems: PropTypes.string,
	children: PropTypes.node,
	justify: PropTypes.string,
};

Flex.defaultProps = {
	alignItems: "start",
	children: null,
	justify: "start",
};

export default Flex;