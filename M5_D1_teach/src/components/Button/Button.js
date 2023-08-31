import React, { Component } from "react";
import "./buttons.css";

// destructuring
// array methods, map, find, filter

class Button extends Component {
	render() {
		const { title, variant } = this.props;
		const btnVariant = `${variant}`;

		return <button className={`${btnVariant}`}>{title}</button>;
	}
}

export default Button;
