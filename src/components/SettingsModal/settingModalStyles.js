import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { red, green } from "@material-ui/core/colors";

export const RedButton = withStyles(() => ({
	root: {
		color: "#fafafa",
		backgroundColor: red[600],
		"&:hover": {
			backgroundColor: red[700],
		},
	},
}))(Button);

export const GreenButton = withStyles(() => ({
	root: {
		color: "#fafafa",
		backgroundColor: green[500],
		"&:hover": {
			backgroundColor: green[700],
		},
	},
}))(Button);