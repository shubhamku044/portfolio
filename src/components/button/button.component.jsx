import React from 'react';
import './button-styles.scss';
import { Link } from 'react-router-dom';

const CustomButton = (props) => {
	return (
		<button className="custom-button">
			<Link to={props.to}>{props.children}</Link>
		</button>
	);
};

export default CustomButton;
